const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');
const authMiddleware = require('./authMiddleware');

router.post('/properties', authMiddleware, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      owner: req.user.userId
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/properties', async (req, res) => {
  try {
    const filters = {};
    if (req.query.type) filters.type = req.query.type;
    if (req.query.location) filters.location = new RegExp(req.query.location, 'i');
    if (req.query.minPrice) filters.price = { $gte: req.query.minPrice };
    if (req.query.maxPrice) filters.price = { ...filters.price, $lte: req.query.maxPrice };
    
    const properties = await Property.find(filters).populate('owner', 'name email');
    res.json(properties);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name email');
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/properties/:id', authMiddleware, async (req, res) => {
  try {
    const property = await Property.findOne({ _id: req.params.id, owner: req.user.userId });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    
    Object.assign(property, req.body);
    property.updatedAt = Date.now();
    await property.save();
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/properties/:id', authMiddleware, async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user.userId });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;