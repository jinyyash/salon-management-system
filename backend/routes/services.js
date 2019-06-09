const express=require('express');
const router = express.Router();
const servicesController=require('../controllers/servicesController')

router.post("/add",servicesController.createServices);

router.get("/view", servicesController.getAllServices);
 
router.put("/delete/:id", servicesController.deleteServices);

router.delete("/update", servicesController.updateServices);

module.exports=router;