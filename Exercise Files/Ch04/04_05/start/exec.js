'use strict';

// execute command prompt command
const exec = require('child_process').exec;

// exec(cmd command, callback)
exec('git --version', function(err, stdout) {
    if (err) {
        throw err;
    }
    console.log('Git version executed');

    console.log(stdout);
});