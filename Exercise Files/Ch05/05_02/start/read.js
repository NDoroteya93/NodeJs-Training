'use strict';

const fs = require('fs');
const path = require('path');

// fs.readFile('./lib/sayings.md', 'UTF-8', function(err, contents) {
//     if (err) console.log(err);
//     console.log(contents);
// });

fs.readdir('./lib', function(err, files) {

    files.forEach(function(fileName) {
        var file = path.join(__dirname, 'lib', fileName);

        // tell is file or directory 
        var stats = fs.statSync(file);

        if (stats.isFile()) {

            fs.readFile(file, 'UTF-8', function(err, contents) {
                console.log(contents);
            });

        }
    });
});