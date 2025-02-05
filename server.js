const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// API endpoints will go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});