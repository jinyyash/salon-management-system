const mongoose = require('mongoose');

const apSchema = mongoose.Schema({
  bookingServices: { type: String },
  bookingDate: { type: String},
  bookingTime: { type: String },
  status:{type:String},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }


});

module.exports = mongoose.model('appointment', apSchema);
