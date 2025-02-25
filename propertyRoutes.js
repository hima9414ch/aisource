const express = require('express');
const router = express.Router();
const Property = require('./propertyModel');
const auth = require('./middleware');

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'name email');
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching properties' });
    }
});

router.post('/new', auth, async (req, res) => {
    try {
        const { title, description, price, location } = req.body;
        const property = new Property({
            title,
            description,
            price,
            location,
            owner: req.user.userId
        });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error creating property' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner', 'name email');
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching property' });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const property = await Property.findOne({ _id: req.params.id, owner: req.user.userId });
        if (!property) {
            return res.status(404).json({ message: 'Property not found or unauthorized' });
        }
        Object.assign(property, req.body);
        await property.save();
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error updating property' });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const property = await Property.findOneAndDelete({ _id: req.params.id, owner: req.user.userId });
        if (!property) {
            return res.status(404).json({ message: 'Property not found or unauthorized' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting property' });
    }
});

module.exports = router;
