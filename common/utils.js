'use strict';

// this is a minimum set of underscore-like utility functions, bundled with the idl parser so as to minimize dependencies
var Preconditions = require('precondition');

var EMPTY_STRING = '';

module.exports = {
  EMPTY_STRING: EMPTY_STRING,
  isString: isString,
  stringEndsWith: stringEndsWith,
  isNotEmptyString: isNotEmptyString,
  isArray: isArray,
  isEmptyArray: isEmptyArray,
  isSomething: isSomething,
  forEach: forEach,

  checkIsSomething: function checkIsSomething(x, msg) {
    Preconditions.checkDefined(x, msg);
    Preconditions.check(x !== null, msg);
  },

  isObject: function isObject(o) {
    return isSomething(o) && typeof o === typeof {};
  },

  isFunction: function isFunction(f) {
    return typeof f === typeof isNotEmptyString;
  }

};

function forEach(obj, callback) {
  Object.keys(obj).forEach(function (key) {
    callback(key, obj[key]);
  });
}

function stringEndsWith(str, suffix) {
  Preconditions.check(isString(str), 'Expected String but was %s', str);
  Preconditions.check(isString(suffix), 'Expected String suffix but was %s', suffix);

  if (isEmptyString(str)) {
    return isEmptyString(suffix);
  }

  if (suffix.length > str.length) {
    return false;
  }

  return suffix === str.substr(-suffix.length);
}

function isString(s) {
  return typeof s === typeof EMPTY_STRING;
}

function isNothing(x) {
  return !isSomething(x);
}

function isSomething(x) {
  return x !== void 0 && x !== null;
}

function isNotEmptyString(s) {
  return isString(s) && s.length > 0;
}

function isEmptyString(s) {
  return !isNotEmptyString(s);
}

function isEmptyArray(a) {
  if (isNothing(a)) {
    return true;
  }

  if (!isArray(a)) {
    return false;
  }

  return a.length < 1;
}

function isArray(a) {
  return typeof a === typeof [];
}
