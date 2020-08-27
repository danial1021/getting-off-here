const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pw: { type: String, required: true },
  name: { type: String, required: true },
  pword: { type: String, required: true },
  answer: { type: String, required: true },
  date: { type: String, required: true },
  phonenumber: { type: String, required: true },
});

// Create Model & Export
module.exports = mongoose.model('User', userSchema);