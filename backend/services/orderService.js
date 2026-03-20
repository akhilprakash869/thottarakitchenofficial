const Order = require('../models/Order');

const createOrder = async (data) => {
    const order = new Order(data);
    return await order.save();
};

const getAllOrders = async () => {
    return await Order.find().sort({ createdAt: -1 });
};

module.exports = {
    createOrder,
    getAllOrders,
};
