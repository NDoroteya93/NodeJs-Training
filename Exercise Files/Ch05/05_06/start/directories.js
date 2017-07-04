'use strict';

const fs = require('fs');

// rename or move directories
// fs.renameSync('./assets/logs', './logs');

// console.log('Directory moved');

// fs.rmdir('./assets', function(err) {
//     if (err) {
//         throw err;
//     }

//     console.log('Assets Directory removed!');
// });

// Before I remove directory, read all the files in the directory

fs.readdirSync('./logs').forEach((function(fileName) {
    fs.unlinkSync('./logs/' + fileName);
}));

// cannot remove a directory unless it is empty
// first remove all files in a directory 
fs.rmdir('./logs', function(err) {
    if (err) {
        throw err;
    }

    console.log('Logs Directory removed!')
});