const express=require('express');
const router = express.Router();
const Post = require("../models/appoinment");
const appoinmentController=require('../controllers/AppoinmentController.js')

router.post("/add",appoinmentController.createAppoinment);

router.get("/view", appoinmentController.getAllAppointment);

router.delete("/delete/:id", appoinmentController.deleteAppointment);

module.exports=router;
