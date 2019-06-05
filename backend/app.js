const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");
const Client = require("./models/client");
const Services = require('./models/services');
const Billing = require('./models/billing');
const Appointments = require('./models/appointment');
const cors = require('cors');
const app = express();

mongoose
  .connect(
    "mongodb+srv://jinadi:Anohana@123@cluster0-kbku3.mongodb.net/test?retryWrites=true+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular?retryWrites=true"
  ,{ useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

//Adding Clients to database by admin
app.post("/api/clientadding",(req, res, next) => {
  console.log("adding")
  const addclient = new Client({
    // _id: req.body._id,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
  });
  addclient.save()
  .then(addclient => {
    console.log("jhbjhb");
    res.status(201).json({
      message: "Post added successfully"
    })
    .catch(err => {
      console.log("errrrrrrrrrr")
      res.status(400).json({
        message: "Unable to save"
      })
    })
  })
})

app.get("/api/clientview", (req, res, next) => {
  Client.find()
  .exec()
  .then(doc => {
    console.log(doc);
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json();
  })
});

app.put("/api/clientupdate",(req,res,next) => {
  console.log(req.body._id);
  Client.findById({_id:req.body._id}, (err,details) => {
    if(err){
      res.status(500).json({ errmsg: err });
    }else{
      console.log(req.body._id);
      details.fname = req.body.fname;
      details.lname = req.body.lname;
      details.email = req.body.email;
      details.phone = req.body.phone;

      details.save()
      // const addclient = new Client({
      //   fname: req.body.fname,
      //   lname: req.body.lname,
      //   email: req.body.email,
      //   phone: req.body.phone,
      // });
      // addclient.save()
      .then(addclient => {
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
})

app.delete('/api/clientdelete/:id',( req,res,next ) => {
  console.log("delete client");
  Client.findByIdAndRemove(req.params.id,(err,details) => {
    if(err){
      res.status(500).json({ errmsg: err });
    }else{
      res.status(200).json({ msg: details });
    }
  })
})

//Add Services
app.post("/api/serviceadding",(req, res, next) => {
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
})


//Add Booking
app.post("/api/customerbooking",(req, res, next) => {
  const booking = new Appointments({
    email: req.body.email,
    provide_service: req.body.provide_service
  });
  booking.save()
  .then(add => {
    res.status(201).json({
      message: "Service created successfully"
    })
  })
})

//calculate bill

// app.post("/api/billadding",(req, res, next) => {
//   const bill = new Billing({
//     customer_id: req.body.customer_id,
//     cost: req.body.cost,
//     status: req.body.status
//   });
//   bill.save()
//   .then(add => {
//     res.status(201).json({
//       message: "Bill made successfully"
//     })
//   })
// })

//View client billing details
app.get("/api/billingview", (req, res, next) => {
  console.log("billing")
  Billing.find()
  .exec()
  .then(doc => {
    // id = doc._id;
    // Client.findById({_id:id}, (err,details) => {
    //   if(err){
    //     res.status(500).json({ errmsg: err });
    //   }else{
    //   }
    // })
    console.log(doc);
    res.status(200).json(doc);
  })
});

// view appointment
app.get("/api/appointmentview", (req, res, next) => {
  var resultArray= [];
  Appointments.find({},function(err,appointmnt){
    var len = appointmnt.length;
    for(let i = 0; i < appointmnt.length; i++){
      Services.find({service_name: appointmnt[i].provide_service},function(err,services){
        var obj = {};
        obj['email'] = appointmnt[i].email;
        obj['provide_service'] = appointmnt[i].provide_service;
        obj['payment'] = services[0].service_payment;
        resultArray.push(obj);
        if(resultArray.length == len){
          console.log(resultArray);
          res.status(202).json(resultArray);
        }
      })
    }
  })
});
//search
app.get("/api/calculateBilling/:email", (req, res, next) => {
  console.log(req.params.email);
  var resultArray= [];
  Appointments.find({email : req.params.email},function(err,appointmnt){
    var len = appointmnt.length;
    for(let i = 0; i < appointmnt.length; i++){
      Services.find({service_name: appointmnt[i].provide_service},function(err,services){
        var obj = {};
        obj['email'] = appointmnt[i].email;
        obj['provide_service'] = appointmnt[i].provide_service;
        obj['payment'] = services[0].service_payment;
        resultArray.push(obj);
        if(resultArray.length == len){
          console.log(resultArray);
          res.status(202).json(resultArray);
        }
      })
    }
  })
});

//make an appointment
app.post("/api/makeappointment",(req, res, next) => {
  const appointment = new Appointments({
    email: req.body.email,
    provide_service: req.body.provide_service
  });
  appointment.save()
  .then(add => {
    res.status(201).json({
      message: "Appointment made successfully"
    })
    .catch(err => {
      res.status(400).json()
    })
  })
})

module.exports = app;