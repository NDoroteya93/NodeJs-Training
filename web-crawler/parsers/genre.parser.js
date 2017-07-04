const { Genre } = require('../models/genre.model');

const parseGenre = (url) => {

    return fetch(url)
        .then((response) => {
            // 200

            if (!response.ok) {
                throw new Error('Invalid Url!');
            }

            // get body
            // return promise
            return response.text();
        })
        .then((html) => {
            // return require('./dom-parser')(html);
            //const m = parsers.parseMovie(html); // factory 
            const genre = Genre.fromHtml(html);
            return genre;
        });
};

module.exports = { parseGenre };