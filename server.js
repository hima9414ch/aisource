const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Your RESTful API routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));