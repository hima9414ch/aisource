const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// API endpoint to fetch portfolio data
app.get('/portfolio', (req, res) => {
  const portfolioData = {
    projects: [...],
    skills: [...],
    background: {...}
  };
  res.json(portfolioData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});