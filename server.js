// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.send('Hello, World! You are connected to the backend.');
});
app.post('/', async (req, res) => {
const { name, email } = req.body;

res.send({name, email});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Server is running on port ' + PORT);
});
