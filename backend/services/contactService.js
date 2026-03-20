const Contact = require('../models/Contact');

const createContact = async (data) => {
    const contact = new Contact(data);
    return await contact.save();
};

module.exports = {
    createContact,
};
