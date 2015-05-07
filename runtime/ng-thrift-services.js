'use strict';

/**
 * This is the entry point for all angular thrift service dependents.
 * This is the only file you have to require.
 * This is an auto-generated file.
 */

require('angular');
var Preconditions = require('precondition');
require('./thrift-runtime');
var serviceFactory = require('./thrift-service-factory');
var util = require('../common/utils');

var moduleName = 'ngThriftServices';

module.exports = function buildAngularThriftServices(config) {
  util.checkIsSomething(config, 'Undefined thrift configuration.');
  var dependencies = !!(config.retryConfig) ? [config.retryConfig.module] : [];
  var angularModule = angular.module(moduleName, dependencies);

  var services = config.services;
  Preconditions.check(util.isArray(services), 'Expected thrift services array, but was %s', services);

  var rootUrl = config.rootUrl;
  Preconditions.check(isRootUrl(rootUrl), 'Invalid root url: %s', rootUrl);

  Object.keys(services).forEach(function (serviceName) {
    var functionMap = services[serviceName];
    serviceFactory(angularModule, rootUrl, config.retryConfig, serviceName, functionMap);
  });
};

function isRootUrl(str) {
  if (!util.isString(str)) {
    return false;
  }

  return util.isArray(/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]/.exec(str));
}
