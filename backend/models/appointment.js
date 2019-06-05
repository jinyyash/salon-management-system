const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  email: { type: String, required: true },
  provide_service: { type: String, required: true },
});

module.exports = mongoose.model('Appointments', appointmentSchema);