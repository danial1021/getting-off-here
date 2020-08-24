const mongoose = require('mongoose');

// Define Schemes
const busStopSchema = new mongoose.Schema({
  busstop_id: { type: String, required: true, unique: true },
  busstop_name: { type: String , required: true },
  name_e: { type: String , required: true },
  longitude: { type: String , required: true },
  latitude: { type: String , required: true },
  ars_id: { type: String , required: true },
  next_busstop: { type: String , required: true }
});

// Create Model & Export
module.exports = mongoose.model('BusStop', busStopSchema);