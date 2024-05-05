const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
