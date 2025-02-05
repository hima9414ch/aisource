const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/aboutme', (req, res) => {
    res.json({
        name: 'John Doe',
        about: 'Experienced full-stack developer with a passion for creating web applications.',
        experience: '5+ years of experience working with various technologies.',
        education: 'Bachelor's Degree in Computer Science.',
        location: 'San Francisco, CA'
    });
});

app.get('/projects', (req, res) => {
    res.json({
        projects: [
            { title: 'Project 1', description: 'Description of Project 1' },
            { title: 'Project 2', description: 'Description of Project 2' }
        ]
    });
});

app.get('/skills', (req, res) => {
    res.json({
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB']
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});