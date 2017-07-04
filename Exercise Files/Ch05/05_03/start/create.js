'use strict';

// create a new .md file 
const fs = require('fs');

// some content 
var md = `

    Samle Markdown Title
    ====================

    Sample subtitle
    ---------------

    * point
    * point
    * point 

`;

fs.writeFile('sample.md', md.trim(), function(err) {

    console.log('File created!')

});