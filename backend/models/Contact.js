const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
        },
        phone: {
            type: String,
            trim: true,
            match: [/^\+?[\d\s-]{10,}$/, 'Please provide a valid phone number']
        },
        message: { type: String, required: true },
        type: { type: String, default: 'general', enum: ['general', 'career'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
