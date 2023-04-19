const server = require('./src/app.js');
const db = require('./src/db.js');


db.sync({force: false}).then(async () => {

    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})