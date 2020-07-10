const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: Array , required: true }
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('User', userSchema);