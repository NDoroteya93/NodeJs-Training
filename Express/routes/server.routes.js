// config 
// domain.com/ --> --- Home ----
// domain.com/all --> --- All ----

const attach = (app) => {
    app.get('/', (req, res) => {
        res
            .status(404)
            .send('<h1>Home</h1>');
    });

    app.get('/json', (req, res) => {
        res.send({
            id: 1,
            name: 'Gosho',
            interests: ['Math', 'JS']
        })
    })

    app.get('/all', (req, res) => {
        res.send(`
        <h1>All</h1>    
        <ul>
            <li><a href="#item-1">Go to Item 1</a></li>
            <li><a href="#item-2">Go to Item 2</a></li>
            <li><a href="#item-3">Go to Item 3</a></li>
        </ul>
        `);
    });

}

module.exports = attach;