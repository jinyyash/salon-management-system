
const Billing = require("../models/post");
const Appointments = require('../models/appoinment');
const Services = require('../models/services');

exports.viewBilling=  (req, res, next) => {
    var resultArray= [];
    Appointments.find({},function(err,appointmnt){
        console.log(appointmnt);
        var len = appointmnt.length;
        for(let i = 0; i < appointmnt.length; i++){
            Services.find({service_name: appointmnt[i].bookingServices},function(err,services){
                var obj = {};
                obj['email'] = appointmnt[i].email;
                obj['provide_service'] = appointmnt[i].bookingServices;
                obj['payment'] = services[0].service_payment;
                resultArray.push(obj);
                if(resultArray.length == len){
                console.log(resultArray);
                res.status(202).json(resultArray);
                }
            })
        }
    })
  }

exports.calculateBilling=  (req, res, next) => {
    console.log(req.params.email);
    var tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    // var tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split("T")[0];
    console.log(tomorrow);
    const now = new Date();
    console.log(now);
    var resultArray= [];
    Appointments.find({email : req.params.email, bookingDate: { "$gte": now, "$lt": tomorrow }},function(err,appointmnt){
      console.log(appointmnt);  
      var len = appointmnt.length;
        for(let i = 0; i < appointmnt.length; i++){
            Services.find({service_name: appointmnt[i].bookingServices},function(err,services){
            var obj = {};
            obj['email'] = appointmnt[i].email;
            obj['provide_service'] = appointmnt[i].bookingServices;
            obj['payment'] = services[0].service_payment;
            resultArray.push(obj);
            console.log(len);
            console.log(resultArray);
            if(resultArray.length == len){
                console.log(resultArray);
                res.status(202).json(resultArray);
            }
            })
        }
    })
  }

  exports.getAllPost=(req, res, next) => {
    Billing.find().then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      });
    });
  };

  exports.deletePost=(req, res, next) => {
    Billing.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Post deleted!" });
    });
  }
  