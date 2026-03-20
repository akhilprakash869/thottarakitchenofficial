const orderService = require('../services/orderService');

const placeOrder = async (req, res, next) => {
    try {
        const { name, phone, items, notes } = req.body;

        if (!name || !phone || !items) {
            res.status(400);
            throw new Error('Name, phone, and items are required.');
        }

        const order = await orderService.createOrder({ name, phone, items, notes });

        res.status(201).json({
            success: true,
            message: 'Order received! We will contact you shortly.',
            data: order
        });
    } catch (err) {
        next(err);
    }
};

const getOrders = async (req, res, next) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json({
            success: true,
            data: orders
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    placeOrder,
    getOrders,
};
