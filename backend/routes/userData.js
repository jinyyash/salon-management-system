 const express=require('express');
 const router = express.Router();
 const Post = require("../models/userData");
 const postController=require('../controllers/userDataController')
 
 router.post("",postController.createPost);
 
 router.get("", postController.getAllPost);
  
 router.delete("/:id", );
  

 module.exports=router;