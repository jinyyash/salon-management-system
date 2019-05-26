const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  // _id:    mongoose.Schema.Types.ObjectId, 
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
});

module.exports = mongoose.model('Client', clientSchema);