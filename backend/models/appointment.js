const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  cutomer_id: { type: String, required: true },
  provide_services: { type: Number, required: true },
});

module.exports = mongoose.model('Appointments', appointmentSchema);