const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Sample API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the AI Source API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});