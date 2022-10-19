const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3030;

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

let books = []

app.post('/book', urlencodedParser, (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
