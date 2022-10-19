const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
