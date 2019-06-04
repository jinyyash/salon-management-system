const express=require('express');
const router = express.Router();
const Post = require("../models/appoinment");
const appoinmentController=require('../controllers/AppoinmentController.js')

router.post("",appoinmentController.createPost);

router.get("", appoinmentController.getAllPost);

router.delete("/:id", );


module.exports=router;
