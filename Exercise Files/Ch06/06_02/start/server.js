'use strict';

// create web server 
const http = require('http');

var server = http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Text response from a web server 
    res.end(`
        <!Doctype> 
        <html>
            <head>
                <title>HTML Response</title> 
            </head>
            <body>  
                <h1>Serving Html Text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);

});

server.listen(3000);

console.log('Server is running!');