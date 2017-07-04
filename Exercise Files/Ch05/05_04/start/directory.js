'use strict';

// working with directories
var fs = require('fs');

// check if directory exist 
if (fs.existsSync('lib')) {
    console.log('Directory already created there');
} else {

    fs.mkdirSync('lib', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Directory Created!');
        }
    });
}