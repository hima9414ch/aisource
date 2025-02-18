const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// In-memory data storage
let properties = [];
let inquiries = [];

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

// Get all properties
app.get('/properties', (req, res) => {
    res.json(properties);
});

// Get single property
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

// Submit inquiry
app.post('/inquiries', (req, res) => {
    const inquiry = {
        id: inquiries.length + 1,
        ...req.body,
        createdAt: new Date()
    };
    inquiries.push(inquiry);
    res.status(201).json(inquiry);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
