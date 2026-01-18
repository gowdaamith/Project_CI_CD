const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/', (req, res) => {
  res.send('Hello from Node CI/CD app');
});

module.exports = app;
