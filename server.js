const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Routes
app.get('/projects', (req, res) => {
    // Logic to fetch projects data
});

app.get('/about', (req, res) => {
    // Logic to fetch about me data
});

app.get('/contact', (req, res) => {
    // Logic to handle contact form submissions
});

app.get('/testimonials', (req, res) => {
    // Logic to fetch testimonials data
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});