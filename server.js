const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// In-memory databases
let properties = [];
let users = [];

// Middleware for authentication
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

// Property routes
app.get('/properties', (req, res) => {
    const { city, minPrice, maxPrice } = req.query;
    let filteredProperties = [...properties];

    if (city) {
        filteredProperties = filteredProperties.filter(p => 
            p.address.city.toLowerCase() === city.toLowerCase());
    }

    if (minPrice) {
        filteredProperties = filteredProperties.filter(p => 
            p.price >= Number(minPrice));
    }

    if (maxPrice) {
        filteredProperties = filteredProperties.filter(p => 
            p.price <= Number(maxPrice));
    }

    res.json(filteredProperties);
});

app.post('/properties', authenticateToken, (req, res) => {
    const property = {
        id: Date.now().toString(),
        ...req.body,
        createdBy: req.user.id
    };
    properties.push(property);
    res.status(201).json(property);
});

app.get('/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
});

app.put('/properties/:id', authenticateToken, (req, res) => {
    const index = properties.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Property not found' });
    
    if (properties[index].createdBy !== req.user.id) {
        return res.status(403).json({ error: 'Not authorized' });
    }

    properties[index] = { ...properties[index], ...req.body };
    res.json(properties[index]);
});

app.delete('/properties/:id', authenticateToken, (req, res) => {
    const index = properties.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Property not found' });

    if (properties[index].createdBy !== req.user.id) {
        return res.status(403).json({ error: 'Not authorized' });
    }

    properties.splice(index, 1);
    res.status(204).send();
});

// User routes
app.post('/users/register', (req, res) => {
    const { email, password } = req.body;
    if (users.some(u => u.email === email)) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const user = {
        id: Date.now().toString(),
        email,
        password // In a real app, hash the password
    };
    users.push(user);

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.status(201).json({ token });
});

app.post('/users/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
