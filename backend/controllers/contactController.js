const contactService = require('../services/contactService');

const submitContact = async (req, res, next) => {
    try {
        const { name, email, phone, message, type } = req.body;

        // Validation (Service layer could handle more complex logic, but we'll keep it simple here)
        if (!name || !email || !message) {
            res.status(400);
            throw new Error('Name, email, and message are required.');
        }

        const contact = await contactService.createContact({ name, email, phone, message, type });

        res.status(201).json({
            success: true,
            message: 'Message received! We will get back to you soon.',
            data: contact
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    submitContact,
};
