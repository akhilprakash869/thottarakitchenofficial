const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        phone: {
            type: String,
            required: true,
            trim: true,
            match: [/^\+?[\d\s-]{10,}$/, 'Please provide a valid phone number']
        },
        items: { type: String, required: true, trim: true },
        notes: { type: String, default: '' },
        status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'completed'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
