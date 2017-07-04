let $ = null;

const initParser = require('../dom-parser');

const { DETAILS } = require('../selectors');
class Movie {

    constructor(title, posterUrl) {
        this.title = title;
        this.posterUrl = posterUrl;
    }


    static fromHtml(html) {
        return initParser(html)
            .then(($) => {
                let title = $(DETAILS.TITLE_SELECTOR).html();
                title = title.substring(1, title.indexOf('$nbsp;<span '));
                const posterUrl = $(DETAILS.POSTER_IMG_URL).attr('src');

                return new Movie(title, posterUrl);
            });
    }
}

module.exports = { Movie };