const appoinment = require("../models/appoinment");

exports.createAppoinment=  (req, res, next) => {
    const post = new appoinment({
        name :req.body.name,
        email: req.body.email,
        contactNum: req.body.contactNum,
        bookingServices: req.body.bookingServices,
        bookingDate: req.body.bookingDate,
        bookingTime: req.body.bookingTime,
        status:req.body.status
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: "Post added successfully",
            post: {
                ...createdPost,
                id: createdPost._id
            }
        });
    });
}

exports.getAllPost=(req, res, next) => {
    appoinment.find().then(documents => {
        res.status(200).json({
            message: "fetched successfully!",
            posts: documents
        });
    });
};

exports.deletePost=(req, res, next) => {
    appoinment.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
    });
}
