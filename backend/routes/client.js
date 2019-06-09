const express=require('express');
const router = express.Router();
const clientController=require('../controllers/clientController')

router.get("/view", clientController.getAllUser);

router.get("/count", clientController.getUserCount);
 
router.delete("/delete/:id", clientController.deleteUser);
 
// router.put("/update", clientController.updateUser);

module.exports=router;