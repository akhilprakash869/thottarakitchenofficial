const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact - submit a contact/career inquiry
router.post('/', contactController.submitContact);

module.exports = router;
