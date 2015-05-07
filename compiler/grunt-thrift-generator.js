'use strict';

var shell = require('shelljs');
var concat = require('concat-files');
var rreaddir = require('recursive-readdir');
var merge = require('merge');
var util = require('../common/utils');
var Preconditions = require('precondition');
var path = require('path');
var fs = require('fs-extra');
var uuid = require('node-uuid');
var thriftServiceExtractor = require('./thrift-service-extractor');

module.exports = function (grunt) {
  grunt.registerMultiTask('thriftcompiler', 'Compile Thrift IDL into a javascript file, and generate angular services for each thrift service.', function () {
    var idlRoot = this.data.thriftSrcRoot;
    var angularConfig = this.data.angularServices;
    var isDebugMode = this.data.debug === true;

    var rootEndpointUrl = !!angularConfig ? angularConfig.rootEndpointUrl : null;
    var ngRetryModule, ngRetryService;

    var generateNgServices = !!angularConfig;
    if (generateNgServices) {
      Preconditions.checkType(isFullString(rootEndpointUrl), 'Missing config property "angularServices.rootEndpointUrl"');

      if (util.isObject(angularConfig.thriftRetryHandler)) {
        ngRetryModule = angularConfig.thriftRetryHandler.angularModule;
        Preconditions.checkType(isFullString(ngRetryModule), 'Incomplete thrift retry configuration: missing property "angularServices.thriftRetryHandler.angularModule"');
        ngRetryService = angularConfig.thriftRetryHandler.angularService;
        Preconditions.checkType(isFullString(ngRetryService), 'Incomplete thrift retry configuration: missing property "angularServices.thriftRetryHandler.angularService"');
        grunt.log.writeln('Using angular-injected thrift retry handler: ' + ngRetryModule + '.' + ngRetryService);
      } else {
        grunt.verbose.writeln('No thrift retry handler.');
      }
    } else {
      grunt.verbose.writeln('Not generating angular services.');
    }

    var jobId = uuid.v4();
    var tmpBuildDir = 'tmp-thrift-' + jobId;
    var thriftBin = 'thrift';

    function toTmpOutDir(dirpath) {
      var truncated = dirpath.replace(/\.\./, '.');
      var normalized = path.normalize(truncated);
      return path.join(tmpBuildDir, normalized);
    }

    function compile(src) {
      var srcDir = path.dirname(src);
      var tmpOutDir = toTmpOutDir(srcDir);

      fs.mkdirsSync(tmpOutDir);

      var compileCmd = thriftBin + ' -r --gen js -I ' + idlRoot + ' -out ' + tmpOutDir + ' ' + src;
      var process = shell.exec(compileCmd);
      if (process.code !== 0) {
        var msg = 'Thrift compiler failed on command: ' + compileCmd;
        grunt.fail.warn(msg);
        throw new Error(msg);
      }
    }

    var fileset;
    if (util.isArray(this.files)) {
      if (this.files.length !== 1) {
        grunt.fail.warn('Expected exactly 1 fileset in files array: ' + JSON.stringify(this.files));
        return;
      }
      fileset = this.files[0];
    } else if (util.isObject(this.files)) {
      fileset = this.files;
    } else {
      grunt.fail.warn('Unexpected files configuration: ' + JSON.stringify(this.files));
      return;
    }

    var allSrc = fileset.src;
    if (!allSrc) {
      grunt.fail.warn('Undefined src in fileset: ' + JSON.stringify(fileset));
      return;
    }

    var dstDir = fileset.dest;
    if (!util.isString(dstDir)) {
      grunt.fail.warn('Expected one dest filename in fileset: ' + JSON.stringify(fileset));
      return;
    }
    dstDir = path.normalize(dstDir);
    fs.deleteSync(dstDir);
    fs.ensureDirSync(dstDir);

    var thriftBinConfig = this.data.thriftBin;
    if (util.isString(thriftBinConfig)) {
      thriftBin = thriftBinConfig;
    }

    var allServices = {};
    grunt.verbose.writeln('using thrift executable: ' + thriftBin);
    allSrc.forEach(function (srcPath) {
      try {
        compile(srcPath);
        var serviceMap = thriftServiceExtractor(srcPath);
        allServices = merge(allServices, serviceMap);
        grunt.log.ok(srcPath);
      } catch (e) {
        console.error(e);
        grunt.fail.warn(e);
      }
    });

    var done = this.async();

    rreaddir(tmpBuildDir, function (err, allJsFiles) {
      if (util.isSomething(err)) {
        grunt.fail.warn('Error reading generated thrift files in ' + tmpBuildDir);
        grunt.fail.warn(err);
      }

      if (util.isEmptyArray(allJsFiles)) {
        grunt.log.warn('No thrift js output files generated.');
      }

      if (generateNgServices) {
        var thriftConfig = {rootUrl: rootEndpointUrl, services: allServices};
        if (isFullString(ngRetryModule)) {
          thriftConfig.retryConfig = {module: ngRetryModule, service: ngRetryService};
        }
        var thriftConfigJson = JSON.stringify(thriftConfig);
        var thriftConfigFile = path.join(tmpBuildDir, jobId + '_footer.js');
        var thriftConfigJs = '\nmodule.exports=' + thriftConfigJson + ';';
        fs.outputFileSync(thriftConfigFile, thriftConfigJs);
        allJsFiles.push(thriftConfigFile);
      }

      var thriftHeaderFile = path.join(tmpBuildDir, jobId + '_header.js');
      fs.outputFileSync(thriftHeaderFile, '\n// jshint ignore: start\nvar Thrift = require(\'grunt-angularjs-thrift/runtime/thrift-runtime\');\n');
      allJsFiles.unshift(thriftHeaderFile);

      concat(allJsFiles, path.join(dstDir, 'compiled_thrift.js'), function cleanUp() {
          if (!isDebugMode) {
            fs.deleteSync(tmpBuildDir);
          }

          done();
        }
      );
    });

  });
};

function isFullString(s) {
  return util.isString(s) && s.length > 0;
}
