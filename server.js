const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = 'your-secret-key';

// In-memory database
let listings = [];

// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Auth endpoint
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    // Mock authentication
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Get all listings
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

// Get single listing
app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id === req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
});

// Create new listing
app.post('/api/listings', authenticateToken, (req, res) => {
    const { title, description, price, image, agent } = req.body;
    const newListing = {
        id: Date.now().toString(),
        title,
        description,
        price,
        image,
        agent
    };
    listings.push(newListing);
    res.status(201).json(newListing);
});

// Update listing
app.put('/api/listings/:id', authenticateToken, (req, res) => {
    const index = listings.findIndex(l => l.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Listing not found' });

    listings[index] = { ...listings[index], ...req.body };
    res.json(listings[index]);
});

// Delete listing
app.delete('/api/listings/:id', authenticateToken, (req, res) => {
    const index = listings.findIndex(l => l.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Listing not found' });

    listings.splice(index, 1);
    res.status(204).send();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
