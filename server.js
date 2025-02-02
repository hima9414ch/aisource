// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.send('Hello, World! You are connected to the backend.');
});
app.post('/', async (req, res) => {
const { name, email } = req.body;
const apiUrl = 'https://aisource.vercel.app/';
const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }) }).then(res => res.json());
res.send(response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Server is running on port ' + PORT);
});