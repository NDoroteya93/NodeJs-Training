'use strict';

var fs = require('fs');

// fs.readFile('./chat.log', 'UTF-8', function(err, chatlog) {

//     console.log(`File Read ${chatlog.length}`);
// });

// console.log('Reading File...');

// better solution
// Start receiving small chunks of data
var stream = fs.createReadStream('./chat.log', 'UTF-8');

// variable to concat all this datta chunks
var data = '';

// first data event 
stream.once('data', function() {

    console.log('\n\n\n');
    console.log('Started Reading the File');
    console.log('\n\n\n');

})

stream.on('data', function(chunk) {

    process.stdout.write(`  chunk: ${chunk.length} | `);

    data += chunk;
});

stream.on('end', function() {
    console.log('\n\n\n');
    console.log(`Finish Reading the File ${data.length}`);
    console.log('\n\n\n');
});

// concat each chunks of the file with 65526 charachters on each