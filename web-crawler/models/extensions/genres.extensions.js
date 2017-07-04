const { Genre } = require('../genre.model');
const initParser = require('../../dom-parser');

const { DETAILS } = require('../../selectors');

/// add dynamicaly static method
Genre.fromHtml = (html) => {
    return initParser(html)
        .then(($) => {
            const name = $('#header h1').html();
            const ids = [];
            $('table.results tbody td.image a')
                .each((_, el) => {
                    // /titlte/ttr330r48/
                    const href = $(el).attr('href');
                    const id = href.substr('/title/'.length);

                    ids.push(id);
                });
            return new Genre(name, ids);
        });
}