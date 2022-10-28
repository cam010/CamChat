const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3030;

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

let active_users = []

app.post('/test', (req, res) => {
    console.log(`TEST -- req.body: ${req.body}`)
    res.send('TEST -- REQUEST RECIEVED, RESPONSE RECIEVED')
});

app.post('/login', (req, res) => {
    console.log(`LOGIN -- username: ${req.body.results}`)
    active_users.push(req.body)
    res.status(200)
    res.send(`LOGIN -- username ${req.body.results} logged in`)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
