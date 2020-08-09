const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res, next) => {
    res.send("<h1>Welcome to the home page</h1>");
});

app.listen(port, () => {
    console.log('welcome to the test web app launch!');
});