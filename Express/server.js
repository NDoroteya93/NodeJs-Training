const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());



require('./routes/api.routes')(app);
require('./routes/server.routes')(app);

app.listen(3001, () => console.log('Magic happens'));