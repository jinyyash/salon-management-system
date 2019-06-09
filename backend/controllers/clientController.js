
const User = require("../models/user");

exports.getAllUser=(req, res, next) => {
    User.find()
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

// exports.updateUser=(req, res, next) => {
//     console.log(req.body._id);
//     User.findById({_id:req.body._id}, (err,details) => {
//     if(err){
//       res.status(500).json({ errmsg: err });
//     }else{
//       console.log(req.body._id+"     hjhnj");
//       details.fname = req.body.fname;
//       details.lname = req.body.lname;
//       details.email = req.body.email;
//       details.phone = req.body.phone;

//       details.save()
//       .then(addclient => {
//         res.status(201).json({
//           message: "Updated successfully"
//         })
//       })
//     }
//   })
// }

exports.deleteUser=(req, res, next) => {
    console.log("delete client");
    User.findByIdAndRemove(req.params.id,(err,details) => {
    if(err){
      res.status(500).json({ errmsg: err });
    }else{
      res.status(200).json({ msg: details });
    }
  })
}
  
exports.getUserCount=(req, res, next) => {
  User.find()
  .exec()
  .then(doc => {
    res.status(200).json(doc.length);
  })
};