const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pw: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  phonenum: { type: String, required: true },
});

// Create Model & Export
module.exports = mongoose.model('User', userSchema);