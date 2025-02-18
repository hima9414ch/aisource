const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database
let properties = [
    {
        id: 1,
        title: 'Modern Apartment',
        description: 'Beautiful 2-bedroom apartment',
        price: 250000,
        location: 'Downtown'
    }
];

// GET all properties
app.get('/properties', (req, res) => {
    try {
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve properties' });
    }
});

// POST new property
app.post('/properties', (req, res) => {
    try {
        const newProperty = {
            id: properties.length + 1,
            ...req.body
        };
        properties.push(newProperty);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add property' });
    }
});

// PUT update property
app.put('/properties/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const propertyIndex = properties.findIndex(p => p.id === id);
        
        if (propertyIndex === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }

        properties[propertyIndex] = {
            ...properties[propertyIndex],
            ...req.body,
            id
        };

        res.json(properties[propertyIndex]);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update property' });
    }
});

// DELETE property
app.delete('/properties/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const propertyIndex = properties.findIndex(p => p.id === id);

        if (propertyIndex === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }

        properties = properties.filter(p => p.id !== id);
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete property' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
