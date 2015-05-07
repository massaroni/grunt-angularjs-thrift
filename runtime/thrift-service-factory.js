'use strict';

var Thrift = require('./thrift-runtime');
var Preconditions = require('precondition');
var util = require('../common/utils');
var clone = require('clone');

var ThriftFunctionClient = function ThriftFunctionClient(endpointUrl, serviceName, functionName, paramArray, $q, ThriftRetryHandler) {
  Preconditions.checkType(util.isNotEmptyString(endpointUrl), 'Expected endpoint url, but was %s', endpointUrl);
  Preconditions.checkType(util.isNotEmptyString(serviceName), 'Expected service name, but was %s', serviceName);
  Preconditions.checkType(util.isNotEmptyString(functionName), 'Expected function name, but was %s', functionName);
  Preconditions.checkType(util.isArray(paramArray), 'Expected an array of parameter names, but was %s', paramArray);

  var clientCtorName = serviceName + 'Client';
  var ClientCtor = window[clientCtorName];
  Preconditions.checkType(util.isFunction(ClientCtor), 'No global constructor for thrift client: %s', clientCtorName);

  var self = this;
  var deferred = $q.defer();
  var rejected = false;
  var resolved = false;
  var callCount = 0;
  var retryContext = {};
  var args = null;

  function reject(reason) {
    rejected = true;
    deferred.reject(reason);
  }

  function getState() {
    var argsClone = clone(args);
    argsClone.pop();

    return {
      args: argsClone,
      serviceName: serviceName,
      functionName: functionName,
      paramArray: clone(paramArray),
      endpointUrl: endpointUrl,
      callCount: callCount
    };
  }

  function thriftCallback(result) {
    if (result instanceof Error) {
      if (util.isSomething(ThriftRetryHandler)) {
        ThriftRetryHandler.handleError(self, result, getState());
      } else {
        reject(result);
      }
    } else {
      deferred.resolve(result);
    }
  }

  this.doCall = function doCall() {
    Preconditions.checkType(rejected === false, 'Can\'t retry a thrift service call that has already completed with a reject.');
    Preconditions.checkType(resolved === false, 'Cant\'t retry a thrift service call that has already resolved.');

    if (args === null) {
      args = Array.prototype.slice.call(arguments);
      args.push(thriftCallback);
    }

    for (var i = 0; i < paramArray.length; i++) {
      // we could be more strict about type checking
      Preconditions.checkType(util.isSomething(args[i]), 'Missing %s argument.', paramArray[i]);
    }

    var transport = new Thrift.TXHRTransport(endpointUrl);
    var protocol = new Thrift.TJSONProtocol(transport);
    var client = new ClientCtor(protocol);

    var clientFunction = client[functionName];
    Preconditions.checkType(util.isFunction(clientFunction), 'Thrift service %s has no function %s', serviceName, functionName);

    callCount++;

    try {
      clientFunction.apply(client, args);
    } catch (e) {
      if (util.isSomething(ThriftRetryHandler)) {
        ThriftRetryHandler.handleError(self, e, getState());
      } else {
        reject(e);
      }
    }

    return deferred.promise;
  };

  /**
   * The retry handler can use this function to invoke another call to the thrift endpoint,
   * with the current internal thrift arguments.
   *
   * @returns {*}
   */
  this.retry = function retry() {
    return self.doCall();
  };

  /**
   * The retry handler can use this function to swap out arguments.
   *
   * @param index
   * @param value
   */
  this.setArg = function setArg(index, value) {
    Preconditions.checkType(typeof index === 'number', 'Expected int index, but was %s', index);
    Preconditions.checkType(index >= 0, 'Index out of bounds: %s', index);
    Preconditions.checkType(index < paramArray.length, 'Index out of bounds: %s', index);
    args[index] = value;
  };

  /**
   * The retry handler can use this function to force a reject on this function call, instead of doing a retry.
   *
   * @param reason
   */
  this.reject = function forceReject(reason) {
    reject(reason);
  };

  this.getPromise = function getPromise() {
    return deferred.promise;
  };

  /**
   * The retry handler can use this object for it's own bookkeeping, so that the handler itself
   * can be stateless. Each thrift service call "session" has its own context object.
   *
   * @returns {{}}
   */
  this.getRetryContext = function getRetryContext() {
    return retryContext;
  };
};

function checkRetryConfig(config) {
  if (util.isSomething(config)) {
    Preconditions.checkType(util.isNotEmptyString(config.module), 'Missing retryConfig.module, the name of the angular module with the thrift retry handler');
    Preconditions.checkType(util.isNotEmptyString(config.service), 'Missing retryConfig.service, the name of the angular-injected thrift retry handler');
  }
}

/**
 * This factory generates an angular service with a function for each thrift server call.
 * The provided thrift service functions return an angular promise, instead of requiring a callback
 * function. This factory also registers the service with the given angular module.
 * This factory builds endpoint urls from the provided url path prefix.
 * The final url is: [urlPathPrefix]/[serviceName]
 * All thrift service javascript types must be globals.
 */
module.exports = function registerAngularThriftService(angularModule, urlPathPrefix, retryConfig, serviceName, functionMap) {
  Preconditions.checkType(util.isObject(angularModule), 'Expected angularjs module, but was %s', angularModule);
  Preconditions.checkType(util.isString(urlPathPrefix), 'Expected url path prefix, but was %s', urlPathPrefix);
  Preconditions.checkType(util.isString(serviceName), 'Expected thrift service name, but was %s', serviceName);
  Preconditions.checkType(util.isObject(functionMap), 'Expected json thrift service description, but was %s', functionMap);
  checkRetryConfig(retryConfig);

  var endpointUrl = (util.stringEndsWith(urlPathPrefix, '/') ? urlPathPrefix : urlPathPrefix + '/') + serviceName;

  var service = function thriftService($q, ThriftRetryHandler) {
    var self = this;

    util.forEach(functionMap, function buildRpcFunction(functionName, paramArray) {
      Preconditions.checkType(util.isArray(paramArray), 'Expected an array of parameter names, but was %s', paramArray);

      self[functionName] = function thriftRpcFn() {
        var client = new ThriftFunctionClient(endpointUrl, serviceName, functionName, paramArray, $q, ThriftRetryHandler);
        var args = Array.prototype.slice.call(arguments);
        return client.doCall.apply(client, args);
      };
    });
  };

  if (util.isSomething(retryConfig)) {
    angularModule.service('Thrift' + serviceName, ['$q', retryConfig.service, service]);
  } else {
    angularModule.service('Thrift' + serviceName, ['$q', service]);
  }

  return service;
};
