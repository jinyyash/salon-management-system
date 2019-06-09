const mongoose = require('mongoose');

const apSchema = mongoose.Schema({
  email: { type: String },
  bookingServices: { type: String },
  bookingDate: { type: Date},
  bookingTime: { type: String },
  status:{type:String}

});

module.exports = mongoose.model('appoinment', apSchema);
