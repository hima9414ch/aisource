const express = require('express');
const Property = require('./propertyModel');
const router = express.Router();

// Get Properties List
router.get('/list', async (req, res) => {
  try {
    const { type, location, minPrice, maxPrice } = req.query;
    let query = {};
    if (type) query.type = type;
    if (location) query.location = new RegExp(location, 'i');
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    const properties = await Property.find(query).populate('owner', 'username email');
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add Property
router.post('/add', async (req, res) => {
  try {
    const propertyData = req.body;
    const property = await Property.create(propertyData);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update Property
router.put('/update', async (req, res) => {
  try {
    const { propertyId, ...updates } = req.body;
    const property = await Property.findByIdAndUpdate(propertyId, updates, { new: true });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete Property
router.delete('/delete', async (req, res) => {
  try {
    const { propertyId } = req.body;
    const property = await Property.findByIdAndDelete(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
