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
    console.log(`TEST -- req.body: ${JSON.parse(req.body)}`)
    res.send(`TEST -- REQUEST RECIEVED, RESPONSE RECIEVED ${JSON.parse(req.body)}`)
});

app.post('/login', (req, res) => {
    if (req.body.username === undefined) {
        res.status(400)
        res.send(`LOGIN -- FAILED: no username provided`)
    } else {
        console.log(`LOGIN -- username: ${req.body.username}`)
        active_users.push(req.body)
        res.status(200)
        res.send(`LOGIN -- username ${req.body.username} logged in`)
    }
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
