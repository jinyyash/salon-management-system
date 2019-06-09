
const Services = require("../models/services");

exports.createServices=  (req, res, next) => {
    const addservice = new Services({
        service_name: req.body.service_name,
        service_payment: req.body.service_payment,
      });
      addservice.save()
      .then(addservice => {
        res.status(201).json({
          message: "service added successfully"
        })
    })
}

exports.getAllServices=(req, res, next) => {
    Services.find()
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

exports.deleteServices=(req, res, next) => {
    console.log("delete client");
    Services.findByIdAndRemove(req.params.id,(err,details) => {
        if(err){
            res.status(500).json({ errmsg: err });
        }else{
            res.status(200).json({ msg: details });
        }
    })
}

exports.updateServices=(req, res, next) => {
    console.log(req.body._id);
    Services.findById({_id:req.body._id}, (err,details) => {
    if(err){
      res.status(500).json({ errmsg: err });
    }else{
      console.log(req.body._id);
      details.service_name = req.body.service_name;
      details.service_payment = req.body.service_payment;

      details.save()
      .then(addservice => {
        res.status(201).json({
          message: "Updated successfully"
        })
        .catch(err => {
          res.status(400).json({
            message: "Unable to update"
          })
        })
      })
    }
  })
}
  