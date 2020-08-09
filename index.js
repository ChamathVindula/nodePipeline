const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send("<h1>Welcome to the home page</h1>");
});

app.listen(8080, () => {
    console.log('welcome');
});