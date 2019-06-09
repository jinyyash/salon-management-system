 const express=require('express');
 const router = express.Router();
 const Post = require("../models/userData");
 const controller=require('../controllers/userDataController')
 
 router.post("",controller.create);
 
 router.get("", controller.getAll);
  
 router.delete("/:id", controller.delete);
  

 module.exports=router;