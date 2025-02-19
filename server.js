const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';
const PORT = process.env.PORT || 3000;

// In-memory storage
let listings = [];
const users = [
    { username: 'admin', password: 'admin123' }
];

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

// Auth endpoint
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({ token });
});

// Listings endpoints
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id === req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
});

app.post('/api/listings', authenticateToken, (req, res) => {
    const { title, description, price, imageURL } = req.body;
    const newListing = {
        id: Date.now().toString(),
        title,
        description,
        price,
        imageURL
    };
    listings.push(newListing);
    res.status(201).json(newListing);
});

app.put('/api/listings/:id', authenticateToken, (req, res) => {
    const index = listings.findIndex(l => l.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Listing not found' });

    listings[index] = { ...listings[index], ...req.body };
    res.json(listings[index]);
});

app.delete('/api/listings/:id', authenticateToken, (req, res) => {
    const index = listings.findIndex(l => l.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Listing not found' });

    listings = listings.filter(l => l.id !== req.params.id);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
