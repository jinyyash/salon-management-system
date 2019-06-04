 const express=require('express');
 const router = express.Router();
 const Post = require("../models/post");
 const postController=require('../controllers/postController')
 
 router.post("",postController.createPost);
 
 router.get("", postController.getAllPost);
  
 router.delete("/:id", );
  

 module.exports=router;