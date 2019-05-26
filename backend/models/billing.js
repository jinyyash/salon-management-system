const mongoose = require('mongoose');

const billingSchema = mongoose.Schema({
  customer_id: { type: String, required: true },
  cost: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Billing', billingSchema);