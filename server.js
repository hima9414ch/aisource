const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Mock database
let properties = [];
const adminUser = { username: 'admin', password: 'admin123' };

// Middleware for JWT verification
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminUser.username && password === adminUser.password) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Get all properties
app.get('/properties', (req, res) => {
    res.json(properties);
});

// Get property by ID
app.get('/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
});

// Add new property
app.post('/properties', authenticateToken, (req, res) => {
    const property = {
        id: properties.length + 1,
        ...req.body,
        createdAt: new Date()
    };
    properties.push(property);
    res.status(201).json(property);
});

// Update property
app.put('/properties/:id', authenticateToken, (req, res) => {
    const index = properties.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Property not found' });

    properties[index] = {
        ...properties[index],
        ...req.body,
        updatedAt: new Date()
    };

    res.json(properties[index]);
});

// Delete property
app.delete('/properties/:id', authenticateToken, (req, res) => {
    const index = properties.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Property not found' });

    properties.splice(index, 1);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
