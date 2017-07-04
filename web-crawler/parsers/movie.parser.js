const { Movie } = require('../models/movie.model');

const parseMovie = (url) => {

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
            const movie = Movie.fromHtml(html);
            return movie;
        })
        .catch(function() {
            console.log('Promise Rejected');
        });
};

module.exports = { parseMovie };