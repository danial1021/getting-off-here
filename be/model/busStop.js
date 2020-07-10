const mongoose = require('mongoose');

// Define Schemes
const busStopSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: Array , required: true }
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('BusStop', busStopSchema);