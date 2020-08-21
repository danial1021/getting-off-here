const mongoose = require('mongoose');

// Define Schemes
const busLineSchema = new mongoose.Schema({
    lines: { type: Array, required: true, unique: true }
});

// Create Model & Export
module.exports = mongoose.model('BusLine', busLineSchema);