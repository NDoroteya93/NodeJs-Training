'use strict';
// List contents from the ./lib directory 

const fs = require('fs');

// return array with files and directories- blocking request. Block single node.js thread so all other connections will wait for this sync read code
// const files = fs.readdirSync('./lib');

// asynchronously 
// first argument is always error, 

fs.readdir('./lib', function(err, files) {

    if (err) throw err;

    console.log(files);

});

console.log('Reading files...');