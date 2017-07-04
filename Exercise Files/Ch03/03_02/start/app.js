'use strict';

console.log(process.argv); // retur path to node and path to app.js

function grab(flag) {
    var index = process.argv.indexOf(flag);

    return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!greeting || !user) {
    console.log('You Blew it!')
} else {
    console.log(`WELCOME ${user}, ${greeting}`);
}