const express = require('express');

const sequelize = require('./config/database');

// sample import which needs to be handled with a migration
const book = require('./models/book');

const app = express();

app.get('/', (req, res, next) => {
    res.send("<h1>Welcome to the home page</h1>");
});

sequelize.sync()
.then(result => {
    app.listen(8080, () => {
        console.log(result);
    });
})
.catch(err => {
    console.log(err);
})