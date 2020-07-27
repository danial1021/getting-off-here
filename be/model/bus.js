const mongoose = require('mongoose');

// Define Schemes
const busSchema = new mongoose.Schema({
  lineId: { type: String, required: true, unique: true },
  lineName: { type: Array , required: true },
  dir_up_name: { type: Array , required: true },
  dir_down_name: { type: Array , required: true },
  line_kind: { type: Array , required: true },
  first_run_time: { type: Array , required: true },
  last_run_time: { type: Array , required: true },
  run_interval: { type: Array , required: true }
});

// Create Model & Export
module.exports = mongoose.model('Bus', busSchema);