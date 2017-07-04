'use strict';
// get request from wikipedia 

const https = require('https');
const fs = require('fs'); // file system 

var options = {
    hostname: 'en.wikipedia.org',
    port: 443, // default
    path: '/wiki/George_Washington',
    method: 'GET'
}

var req = https.request(options, function(res) {

    var responseBody = '';

    console.log('Responsee from the serve started');
    console.log(`Server statud: ${res.statusCode}`);
    console.log('Response Headers: %j', res.headers);

    res.setEncoding('UTF-8');

    res.once('data', function(chunk) {
        console.log(chunk);
    });

    res.on('data', function(chunk) {
        console.log(`--chunk -- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on('end', function() {
        fs.writeFile('george-washington.html', responseBody, function(err) {
            if (err) throw err;

            console.log('File Downloaded');
        });
    });

});

req.on('error', function(err) {

    console.log(`problem with request ${err.message}`);

});

// not sending anymore data to the request 
req.end();