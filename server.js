const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret
const JWT_SECRET = 'your-secret-key';

// In-memory database
let properties = [
    {
        id: 1,
        address: '123 Main St',
        price: 500000,
        description: 'Beautiful 3-bedroom house'
    }
];

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// GET all properties
app.get('/properties', (req, res) => {
    res.json(properties);
});

// GET property by ID
app.get('/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) {
        return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
});

// POST new property
app.post('/properties', authenticateToken, (req, res) => {
    const { address, price, description } = req.body;

    if (!address || !price || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newProperty = {
        id: properties.length + 1,
        address,
        price,
        description
    };

    properties.push(newProperty);
    res.status(201).json(newProperty);
});

// PUT update property
app.put('/properties/:id', authenticateToken, (req, res) => {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
        return res.status(404).json({ error: 'Property not found' });
    }

    const { address, price, description } = req.body;
    
    properties[propertyIndex] = {
        ...properties[propertyIndex],
        address: address || properties[propertyIndex].address,
        price: price || properties[propertyIndex].price,
        description: description || properties[propertyIndex].description
    };

    res.json(properties[propertyIndex]);
});

// DELETE property
app.delete('/properties/:id', authenticateToken, (req, res) => {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
        return res.status(404).json({ error: 'Property not found' });
    }

    properties.splice(propertyIndex, 1);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
