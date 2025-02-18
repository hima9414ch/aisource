const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simulated database
let properties = [];
let nextId = 1;

// GET all properties
app.get('/properties', (req, res) => {
    try {
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve properties' });
    }
});

// GET single property
app.get('/properties/:id', (req, res) => {
    try {
        const property = properties.find(p => p.id === parseInt(req.params.id));
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve property' });
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
            id: nextId++,
            title,
            description,
            price,
            imageUrl,
            createdAt: new Date()
        };

        properties.push(newProperty);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create property' });
    }
});

// PUT update property
app.put('/properties/:id', (req, res) => {
    try {
        const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
        
        if (propertyIndex === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }

        const updatedProperty = {
            ...properties[propertyIndex],
            ...req.body,
            id: properties[propertyIndex].id
        };

        properties[propertyIndex] = updatedProperty;
        res.json(updatedProperty);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update property' });
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
        res.status(500).json({ error: 'Failed to delete property' });
    }
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
