const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - submit a contact/career inquiry
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message, type } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required.' });
        }
        const contact = new Contact({ name, email, phone, message, type });
        await contact.save();
        res.status(201).json({ message: 'Message received! We will get back to you soon.' });
    } catch (err) {
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

module.exports = router;
