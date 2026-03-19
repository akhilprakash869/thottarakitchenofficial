const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
        items: { type: String, required: true },
        notes: { type: String, default: '' },
        status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'completed'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
