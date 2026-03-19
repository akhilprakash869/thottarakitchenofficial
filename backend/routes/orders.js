const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders - create a new order
router.post('/', async (req, res) => {
    try {
        const { name, phone, items, notes } = req.body;
        if (!name || !phone || !items) {
            return res.status(400).json({ error: 'Name, phone, and items are required.' });
        }
        const order = new Order({ name, phone, items, notes });
        await order.save();
        res.status(201).json({ message: 'Order received! We will contact you shortly.', order });
    } catch (err) {
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

// GET /api/orders - get all orders (admin use)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
