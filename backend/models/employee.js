const mongoose = require("mongoose");

var Employees = mongoose.model('Employee', {
	_id: { type: String },
	fname: { type: String },
	lname: { type: String },
	nic: { type: String },
	dob: { type: String },
	start_d: { type: String },
	email: { type: String },
	phone: { type: String },
	});

module.exports = Employee;
