const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

router.get('/', (req, res) => {
	Employee.find((err, docs) => {
		if (!err) { res.send(docs); }
		else { console.log('Error in retriving Employee :' + JSON.stringify(err, undefined, 2)); }
	});
});

router.get('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		return res.status(400).send('No record with given id : ${req.params.id}');
		
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
	});		
});
	
router.post('/', (req, res) => {
	var emp = new Employee({
		fname: req.body.fname,
		lname: req.body.lname,
		nic: req.body.nice,
		dob: req.body.dob,
		start_d: req.body.start_d,
		email: req.body.email,
		phone: req.body.phone
	});
	emp.save((err, doc) => {
		if (!err) { res.send(doc); }
		else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
	});
});

router.put('/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		return res.status(400).send('No record with given id : ${req.params.id}');
	
	var emp = {
		fname: req.body.fname,
		lname: req.body.lname,
		nic: req.body.nice,
		dob: req.body.dob,
		start_d: req.body.start_d,
		email: req.body.email,
		phone: req.body.phone
	};
	Employee.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) => {
		if (!err) {res.send(doc); }
		else { console.log('Error in Employee update :' + JSON.stringify(err, undefined, 2)); }
	});
});

module.exports = router;