const express = require("express");

const BillingController = require("../controllers/billingController");

const router = express.Router();

router.get("/view", BillingController.viewBilling);

router.get("/calculate/:email", BillingController.calculateBilling);

module.exports = router;
