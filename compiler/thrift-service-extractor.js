'use strict';

var preconditions = require('precondition');
var utils = require('../common/utils');
var fs = require('fs-extra');

// Import ANTLR3 JavaScript parser runtime, export org namespace to GLOBAL
GLOBAL.org = require('./antlr3-runtime').runtime.org;

var ThriftLexer = require('./AntlrThriftLexer');
var ThriftParser = require('./AntlrThriftParser');

module.exports = function (idlFilePath) {
  preconditions.checkType(utils.isString(idlFilePath), 'Expected IDL file path, but was %s', idlFilePath);

  GLOBAL['AntlrThriftParser'] = ThriftParser;
  GLOBAL['AntlrThriftLexer'] = ThriftLexer;

  var idlFileContents = fs.readFileSync(idlFilePath);

  // Read single file and use source code as input
  var cstream = new org.antlr.runtime.ANTLRStringStream(String(idlFileContents)),
    lexer = new ThriftLexer(cstream),
    tstream = new org.antlr.runtime.CommonTokenStream(lexer),
    parser = new ThriftParser(tstream);

  parser.program();

  return parser.services;
};
