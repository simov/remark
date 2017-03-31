'use strict';

var unified = require('unified');
var parse = require('remark-parse');
var stringify = require('remark-stringify');

var remark = unified().use(parse).use(stringify).freeze();
remark.unified = unified;
remark.parse = parse;
remark.stringify = stringify;

module.exports = remark;
