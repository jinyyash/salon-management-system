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
  
exports.sentmail=(req, res, next)=>{
    const out=`
    <h2>Salon Moon<h2>
    <h3>Accepted Appointment<h3>
    <h3>your, ${req.body.provide_service} has accepted. See you that day.<h3>
    <h3>Thank you<h3>
    `
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user:' salonmanagementsenari@gmail.com', // generated ethereal user
        pass: '#admin123' // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info =  transporter.sendMail({
      from: '"Salon Moon" <salonmanagementsenari@.gmail.com>', // sender address
      to: req.body.eemail, // list of receivers
      subject: "Accepted Appointment", // Subject line
      text: out, // plain text body
      html: out // html body
    });
  };

  exports.appointmentsviews=(req, res, next) => {
    Appointments.find()
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json();
    })
  };


