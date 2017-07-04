const { Movie } = require('../movie.model');
const initParser = require('../../dom-parser');

const { DETAILS } = require('../../selectors');

// // instance method in js
// Movie.prototype.instanceMethod = () =? {

// }
/// add dynamicaly static method
Movie.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            let title = $(DETAILS.TITLE_SELECTOR).html();
            title = title.substring(1, title.indexOf('$nbsp;<span '));
            const posterUrl = $(DETAILS.POSTER_IMG_URL).attr('src');

            return new Movie(title, posterUrl);
        });
}