const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'your-secret-key';

app.use(cors());
app.use(express.json());

// In-memory storage
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
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// User registration
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: users.length + 1, email, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// User login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Get all properties
app.get('/properties', (req, res) => {
  res.json(properties);
});

// Get property by ID
app.get('/properties/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (!property) return res.status(404).json({ error: 'Property not found' });
  res.json(property);
});

// Create property
app.post('/properties', authenticateToken, (req, res) => {
  const { title, price, location, propertyType, description } = req.body;
  const property = {
    id: properties.length + 1,
    title,
    price,
    location,
    propertyType,
    description
  };
  properties.push(property);
  res.status(201).json(property);
});

// Update property
app.put('/properties/:id', authenticateToken, (req, res) => {
  const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
  if (propertyIndex === -1) return res.status(404).json({ error: 'Property not found' });

  const updatedProperty = { ...properties[propertyIndex], ...req.body };
  properties[propertyIndex] = updatedProperty;
  res.json(updatedProperty);
});

// Delete property
app.delete('/properties/:id', authenticateToken, (req, res) => {
  const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
  if (propertyIndex === -1) return res.status(404).json({ error: 'Property not found' });

  properties.splice(propertyIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
