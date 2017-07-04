'use strict';

require('./polyfills');

// get the movies  and add them to a queue
const genresUrlBase = 'http://www.imdb.com/genre/';
const genres = [
    'animation', 'action',
    'fantasy', 'comedy', 'romance',
    'drama', 'horror', 'adventure',
];
// call index.js
require('./models/extensions');

const { parseGenre } = require('./parsers/genre.parser');
const { parseMovie } = require('./parsers/movie.parser');

const movies = [];
const loadMovie = (queue) => {
    console.log('.');
    if (!queue.isEmpty()) {
        return Promise.resolve();
    }

    const id = queue.pop();
    const url = 'http://www.imdb.com/title/' + id;

    // call parseMovie from url
    return parseMovie(url)
        .then((movie) => {
            // get the movie and push in movies array
            movies.push(movie);

            // get next
            // if is not empty then return loadMovie()
            return loadMovie(queue);
        });
};
// get only four times
const loadMovies = (queue) => {
    const PARALEL_LOADS = 64;

    // wait for all 4 movies 
    return Promise.all(
            Array.from({ length: PARALEL_LOADS })
            .map((_) => loadMovie(queue)))
        .then(() => {
            console.log(movies);
        });
};

const queue = require('./queue').getQueue();
const loadAll = () => {
    return Promise.all(
            genres.map((genre) => {
                const url = genresUrlBase + genre;
                return parseGenre(url)
                    .then((g) => {
                        queue.pushMany(...g.moviesIds);
                    });
            }))
        .then(() => {
            return loadMovies(queue);
        });
};

const start = new Date();
loadAll()
    .then(() => {
        const end = new Date();
        console.log(end - start);
    });