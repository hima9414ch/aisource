const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/properties', (req, res) => {
  // Logic to fetch property listings
});

app.post('/contact', (req, res) => {
  // Logic to handle contact form submission
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});