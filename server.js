const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// In-memory storage
let properties = [];
let users = [];

// Middleware for authentication
const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Auth endpoints
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        users.push({ username, password });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Property endpoints
app.get('/properties', async (req, res) => {
    try {
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/properties/:id', async (req, res) => {
    try {
        const property = properties.find(p => p.id === req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/properties', isAuthenticated, async (req, res) => {
    try {
        const { name, price, location, description } = req.body;
        const newProperty = {
            id: Date.now().toString(),
            name,
            price,
            location,
            description,
            createdBy: req.user.username
        };
        properties.push(newProperty);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/properties/:id', isAuthenticated, async (req, res) => {
    try {
        const index = properties.findIndex(p => p.id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }
        properties[index] = { ...properties[index], ...req.body };
        res.json(properties[index]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/properties/:id', isAuthenticated, async (req, res) => {
    try {
        const index = properties.findIndex(p => p.id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ error: 'Property not found' });
        }
        properties.splice(index, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
