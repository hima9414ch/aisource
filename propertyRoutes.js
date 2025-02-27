const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');
const auth = require('./authMiddleware');

// List properties
router.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find(req.query);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Get single property
router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// Add property
router.post('/properties', auth, async (req, res) => {
  try {
    const property = new Property({ ...req.body, owner: req.user._id });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create property' });
  }
});

// Update property
router.put('/properties/:id', auth, async (req, res) => {
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true }
    );
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update property' });
  }
});

// Delete property
router.delete('/properties/:id', auth, async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
});

module.exports = router;
