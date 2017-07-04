const express = require("express");
const cors = require('cors');

const app = express();

const skierTerms = [{
        term: 'Rip',
        defined: 'To move at a high rate of speed'
    },
    {
        term: 'Huck',
        defined: 'To throw your body off of something usually a natural feauture like a cliff'
    },
    {
        term: 'Chrowder',
        defined: 'Powder after itt has benen sufficiently skied'
    }

];


app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use(express.static("./public"));

// resource sharing 
// any domain make request to a dictionary-api
app.use(cors());

app.get('/dictionary-api', (req, res) => {
    res.json(skierTerms);

});


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;