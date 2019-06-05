const Post = require("../models/userData");

exports.createPost=  (req, res, next) => {
    const post = new Post({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        contactNum: { type: String, required: true }
    });
    post.save().then(createdPost => {
        res.status(201).json({
          message: "User added successfully",
          post: {
            ...createdPost,
            id: createdPost._id
          }
        });
      });
  }

  exports.getAllPost=(req, res, next) => {
    Post.find().then(documents => {
      res.status(200).json({
        message: "fetched successfully!",
        posts: documents
      });
    });
  };

  exports.deletePost=(req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "deleted!" });
    });
  }
  