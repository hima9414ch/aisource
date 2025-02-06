const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the AI Source API' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});