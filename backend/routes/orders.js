const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

// POST /api/orders - create a new order
router.post('/', orderController.placeOrder);

// GET /api/orders - get all orders (admin use)
router.get('/', protect, orderController.getOrders);

module.exports = router;
