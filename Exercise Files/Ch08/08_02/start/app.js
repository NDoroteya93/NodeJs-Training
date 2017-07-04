const express = require('express');

// create app instance 
const app = express();

// middleware - costomise plugin
// which add funtionality to yout app

// static file invoke
// statc(name directory)
// custo middleware functi9on

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);

    // if wi invoke next function 
    // we never send the response back
    next();
});

app.use(express.static('./public'));


// add port
app.listen(3000);

console.log('express app runnin on port 3000');

// include instance to the other files
// use to test  
module.exports = app;