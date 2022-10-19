const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

let books = []

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(req.body)

    // Output the book to the console for debugging
    console.log(book);
    console.log(books);
    books.push(book);

    res.send('Book is added to the database');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
