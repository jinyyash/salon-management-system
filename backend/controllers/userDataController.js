const Post = require("../models/userData");

exports.create=  (req, res, next) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        contactNum: req.body.contactNum
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

  exports.getAll=(req, res, next) => {
    Post.find().then(documents => {
      res.status(200).json({
        message: "fetched successfully!",
        posts: documents
      });
    });
  };

  exports.delete=(req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "deleted!" });
    });
  }
  