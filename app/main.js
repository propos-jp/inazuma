// Generated by CoffeeScript 1.10.0
'use strict';
var inazuma, pattern;

inazuma = inazuma || {};

inazuma.remote = require('remote');

inazuma.config = inazuma.remote.require('config');

console.log(inazuma.config.app.document_path);

pattern = '\'' + inazuma.config.app.document_path + '\'/**/';

console.log(pattern);
