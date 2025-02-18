const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let properties = [
    {
        id: 1,
        title: 'Modern Apartment',
        description: 'Beautiful 2-bedroom apartment',
        price: 250000,
        imageUrl: 'https://example.com/apartment.jpg'
    }
];

// GET all properties
app.get('/properties', (req, res) => {
    try {
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET property by ID
app.get('/properties/:id', (req, res) => {
    try {
        const property = properties.find(p => p.id === parseInt(req.params.id));
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST new property
app.post('/properties', (req, res) => {
    try {
        const { title, description, price, imageUrl } = req.body;
        if (!title || !description || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const newProperty = {
            id: properties.length + 1,
            title,
            description,
            price,
            imageUrl: imageUrl || ''
        };
        properties.push(newProperty);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update property
app.put('/properties/:id', (req, res) => {
    try {
        const { title, description, price, imageUrl } = req.body;
        const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
        if (propertyIndex === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }
        properties[propertyIndex] = {
            ...properties[propertyIndex],
            title: title || properties[propertyIndex].title,
            description: description || properties[propertyIndex].description,
            price: price || properties[propertyIndex].price,
            imageUrl: imageUrl || properties[propertyIndex].imageUrl
        };
        res.json(properties[propertyIndex]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE property
app.delete('/properties/:id', (req, res) => {
    try {
        const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
        if (propertyIndex === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }
        properties.splice(propertyIndex, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
