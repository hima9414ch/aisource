const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');
const auth = require('./authMiddleware');

router.post('/properties', auth, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      owner: req.user.userId
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/properties', async (req, res) => {
  try {
    const filters = {};
    if (req.query.minPrice) filters.price = { $gte: parseInt(req.query.minPrice) };
    if (req.query.maxPrice) filters.price = { ...filters.price, $lte: parseInt(req.query.maxPrice) };
    if (req.query.location) filters.location = new RegExp(req.query.location, 'i');
    
    const properties = await Property.find(filters).populate('owner', 'name email');
    res.json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name email');
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/properties/:id', auth, async (req, res) => {
  try {
    const property = await Property.findOne({ _id: req.params.id, owner: req.user.userId });
    if (!property) return res.status(404).json({ message: 'Property not found or unauthorized' });
    
    Object.assign(property, req.body);
    await property.save();
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/properties/:id', auth, async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user.userId });
    if (!property) return res.status(404).json({ message: 'Property not found or unauthorized' });
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;