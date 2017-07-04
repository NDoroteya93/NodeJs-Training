'use strict';

var path = require('path'); // core modules 
var util = require('util'); // helper function 
var v8 = require('v8'); // get information about the memory

// console.log(path.basename(__filename));

// // long path string, using the path join function 
// // when i'll sending each directory in the path
// var dirUploads = path.join(__dirname, 'www', 'files', 'uplaods');

// util.log(dirUploads);

// util.log(v8.getHeapStatistics());

var debuglog = util.debuglog('foo');

var bar = 123;
debuglog('hello from foo [%d]', bar);