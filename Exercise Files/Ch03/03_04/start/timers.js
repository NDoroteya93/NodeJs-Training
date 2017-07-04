'use strict';

var waitTime = 3000;
var curentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
}

console.log('Wait for it');

var interval = setInterval(function() {
    curentTime += waitInterval;
    percentWaited = Math.floor((curentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval)

setTimeout(function() {

    clearInterval(interval);
    writeWaitingPercent(100);
    console.log('\n\nDone!');
}, waitTime);

process.stdout.write('\n\n\n');
writeWaitingPercent(percentWaited);