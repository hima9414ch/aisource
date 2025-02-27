const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');
const authMiddleware = require('./authMiddleware');

// List properties
router.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find(req.query);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single property
router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add property
router.post('/properties', authMiddleware, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      owner: req.user._id
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update property
router.put('/properties/:id', authMiddleware, async (req, res) => {
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete property
router.delete('/properties/:id', authMiddleware, async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
