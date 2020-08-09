const express = require('express');

const app = express();

const port = process.env.port || 8080;

app.get('/', (req, res, next) => {
    res.send("<h1>Welcome to the home page</h1>");
});

app.listen(8080, () => {
    console.log('welcome to the test web app launch!');
});