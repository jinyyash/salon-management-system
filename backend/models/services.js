const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
  // _id:    mongoose.Schema.Types.ObjectId, 
  service_name: { type: String, required: true },
  service_payment: { type: Number, required: true },
});

module.exports = mongoose.model('Services', servicesSchema);