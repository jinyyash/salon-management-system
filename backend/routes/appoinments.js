const express=require('express');
const router = express.Router();
const Post = require("../models/appoinment");
const appoinmentController=require('../controllers/AppoinmentController.js')
const bodyParser = require("body-parser");
const checkAuth=require('../Middleware/check-auth')
const app = express();



router.post("",checkAuth,appoinmentController.createAppoinment);

router.get("",checkAuth, appoinmentController.getAll);

router.delete("/:id",checkAuth,appoinmentController.delete );


module.exports=router;
