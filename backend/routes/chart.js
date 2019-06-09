const express=require('express');
const router = express.Router();
const chartController=require('../controllers/chart')

router.get("/view", chartController.createChart);

module.exports=router;