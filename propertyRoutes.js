const express = require('express');
const Property = require('./propertyModel');
const { authenticateToken, isAdmin } = require('./middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { location, price_range, type } = req.query;
    let query = {};

    if (location) query.location = new RegExp(location, 'i');
    if (type) query.property_type = type;
    if (price_range) {
      const [min, max] = price_range.split('-');
      query.price = { $gte: min, $lte: max };
    }

    const properties = await Property.find(query);
    res.json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/create', authenticateToken, isAdmin, async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      created_by: req.user.userId
    });
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/update/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/delete/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
