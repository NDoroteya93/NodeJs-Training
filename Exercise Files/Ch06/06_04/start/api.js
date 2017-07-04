'use strict';

var http = require('http');

var data = require('./data/inventory');

http.createServer(function(req, res) {

    if (req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/json' });

        res.end(JSON.stringify(data));

    } else if (req.url === '/instock') {
        listInstock(res);
    } else if (req.url === '/onorder') {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/pain' });
        res.end('Whoop... Data not found');
    }

}).listen(3000);

console.log('Listening on port 3000');

// invoke once for every item from the data
// only return true or false
// if is true, add thiis data to new array 
// false - skip adding this data in a new array
function listInstock(res) {

    var inStock = data.filter(function(item) {
        return item.avail === 'In stock';
    });

    res.end(JSON.stringify(inStock));

}

function listOnBackOrder(res) {


    var onOrder = data.filter(function(item) {
        return item.avail === 'On back order';
    });

    res.end(JSON.stringify(onOrder));

}