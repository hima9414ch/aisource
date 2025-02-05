// Backend logic using Express.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// API routes
app.get('/projects', (req, res) => {
    // Logic to fetch projects data
    res.json({
        projects: []
    });
});

app.get('/about', (req, res) => {
    // Logic to fetch about me data
    res.json({
        about: {}
    });
});

app.get('/skills', (req, res) => {
    // Logic to fetch skills data
    res.json({
        skills: []
    });
});

app.post('/contact', (req, res) => {
    // Logic to handle contact form submission
    res.json({
        message: 'Contact form submitted successfully'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});