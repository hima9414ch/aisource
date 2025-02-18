const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// In-memory storage
let properties = [];
let propertyIdCounter = 1;

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authentication token required' });
    }

    try {
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};

// Create property
app.post('/properties', authenticateToken, (req, res) => {
    const { title, description, price, imageUrl, location } = req.body;

    if (!title || !description || !price || !imageUrl || !location) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newProperty = {
        id: propertyIdCounter++,
        title,
        description,
        price,
        imageUrl,
        location,
        createdAt: new Date()
    };

    properties.push(newProperty);
    res.status(201).json(newProperty);
});

// Get all properties with filters
app.get('/properties', (req, res) => {
    let filteredProperties = [...properties];
    const { minPrice, maxPrice, location } = req.query;

    if (minPrice) {
        filteredProperties = filteredProperties.filter(p => p.price >= Number(minPrice));
    }

    if (maxPrice) {
        filteredProperties = filteredProperties.filter(p => p.price <= Number(maxPrice));
    }

    if (location) {
        filteredProperties = filteredProperties.filter(p => 
            p.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    res.json(filteredProperties);
});

// Get single property
app.get('/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === Number(req.params.id));
    
    if (!property) {
        return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
});

// Update property
app.put('/properties/:id', authenticateToken, (req, res) => {
    const propertyIndex = properties.findIndex(p => p.id === Number(req.params.id));

    if (propertyIndex === -1) {
        return res.status(404).json({ error: 'Property not found' });
    }

    const { title, description, price, imageUrl, location } = req.body;

    if (!title || !description || !price || !imageUrl || !location) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    properties[propertyIndex] = {
        ...properties[propertyIndex],
        title,
        description,
        price,
        imageUrl,
        location,
        updatedAt: new Date()
    };

    res.json(properties[propertyIndex]);
});

// Delete property
app.delete('/properties/:id', authenticateToken, (req, res) => {
    const propertyIndex = properties.findIndex(p => p.id === Number(req.params.id));

    if (propertyIndex === -1) {
        return res.status(404).json({ error: 'Property not found' });
    }

    properties.splice(propertyIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
