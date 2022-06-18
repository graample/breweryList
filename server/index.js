require('dotenv').config();
const express = require('express');
// const db = require('./db/postgres.js');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// test
app.get('/test', (req, res) => {
  res.send('test success!');
})

app.listen(port, () => {
  console.log('listening on:', port);
});