const mongoose = require('mongoose');

const billingSchema = mongoose.Schema({
  email: { type: String, required: true },
  services: { type : Array , "default" : [] },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Billing', billingSchema);