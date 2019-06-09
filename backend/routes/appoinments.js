const express=require('express');
const router = express.Router();
const Post = require("../models/appoinment");
const appoinmentController=require('../controllers/AppoinmentController.js')
const bodyParser = require("body-parser");
const checkAuth=require('../Middleware/check-auth')
const app = express();


// router.post("/add",appoinmentController.createAppoinment); //sand
// router.get("/view", appoinmentController.getAllAppointment); //sand

router.post("",checkAuth,appoinmentController.createAppoinment);
router.get("",checkAuth, appoinmentController.getAll);
router.delete("/:id",checkAuth,appoinmentController.delete );
router.delete("/:id",checkAuth,appoinmentController. sentmail);
router.get("/view",appoinmentController.appointmentsviews);
// router.delete("/delete/:id", appoinmentController.deleteAppointment);

module.exports=router;
