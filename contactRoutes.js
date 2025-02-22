const express = require('express');
const router = express.Router();

router.post('/contact/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Here you would typically integrate with an email service
        // For demonstration, we'll just send a success response
        
        res.json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;