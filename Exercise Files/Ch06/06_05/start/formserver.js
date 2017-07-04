'use strict';
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {



    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);
    } else if (req.method === 'POST') {

        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.end(`
            <!Doctype>
            <html>
                <head>
                    <title>Form Results</title>
                </head>
                <body>
                    <h1>Your form Results</h1>
                    <p>${body}</p>
                </body>
            </html>
            `)
        })
    }

    // chain the pipe.. to create readStream
    // im gonna pipe readStream to my response

}).listen(3000);

console.log('Form server listening on port 3000');