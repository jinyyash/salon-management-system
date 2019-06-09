const appoinment = require("../models/appoinment");

exports.createAppoinment=  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    const post = new appoinment({
      
        bookingServices: req.body.bookingServices,
        bookingDate: req.body.bookingDate,
        bookingTime: req.body.bookingTime,
        status:req.body.status,
        creator: req.userData.userId

    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: "added successfully",
            post: {
                ...createdPost,
                id: createdPost._id
            }
        });
    });
}
// exports.getAllAppointment=(req, res, next) => {
exports.getAll=(req, res, next) => {
    appoinment.find().then(documents => {
        res.status(200).json({
            message: "fetched successfully!",
            posts: documents
        });
    });
};


// exports.deleteAppointment=(req, res, next) => {

exports.delete=(req, res, next) => {
    appoinment.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
    });
}


