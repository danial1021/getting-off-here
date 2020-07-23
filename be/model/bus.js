const mongoose = require('mongoose');

// Define Schemes
const busSchema = new mongoose.Schema({
  bus: { type: String, required: true, unique: true },
  bus_stops: { type: Array , required: true }
});

// Create Model & Export
module.exports = mongoose.model('Bus', busSchema);