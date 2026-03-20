const User = require('../models/User');
const authService = require('../services/authService');

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            res.status(401);
            throw new Error('Invalid username or password');
        }

        res.json({
            success: true,
            token: authService.generateToken(user._id),
            user: { id: user._id, username: user.username }
        });
    } catch (err) {
        next(err);
    }
};

const register = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // This is for initial setup. In production, registration should be protected or disabled.
        const userExists = await User.findOne({ username });
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        const user = await User.create({ username, password });
        res.status(201).json({
            success: true,
            token: authService.generateToken(user._id),
            user: { id: user._id, username: user.username }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login,
    register,
};
