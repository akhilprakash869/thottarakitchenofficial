require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(mongoSanitize()); // Prevent NoSQL injection

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/contact', require('./routes/contact'));

// Health Check
app.get('/', (req, res) => {
    res.json({ message: 'Thottara Kitchen API is running ✅' });
});

// Error Handling Middleware
app.use(errorHandler);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        // Only start server if not in a Vercel environment
        if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
            app.listen(process.env.PORT || 5000, () => {
                console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
            });
        }
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        // In local dev, we might want to exit, but in Vercel we should let it handle errors
        if (!process.env.VERCEL) {
            process.exit(1);
        }
    });

// Export the app for Vercel
module.exports = app;
