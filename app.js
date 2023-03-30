'use strict'

const express = require('express');
const app = express();
const cors = require('cors')

// Middleware mounting to app level
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.get('/b-test', (req, res) => {
  res.send('workfing!!');
})

app.listen(9000, () => {
  console.log('listening to server: 9000');
});