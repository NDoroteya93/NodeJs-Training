// require('./movies.extensions');
// require('./categories.extensions');

const path = require('path');

require('fs')
    .readdirSync(__dirname)
    .filter((file) => file.includes('.extensions'))
    .forEach((modulName) => {
        const modulePath = path.join(__dirname, modulName);
        require(modulePath);
    });