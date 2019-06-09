const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");
const postRoutes=require('./routes/posts');
const userRoutes=require('./routes/users');
const servicesRoutes = require('./routes/services');
const clientRoutes = require('./routes/client');
const appointmentRoutes = require('./routes/appoinments');
const billingRoutes = require('./routes/billing');
const chartRoutes = require('./routes/chart');
const app = express();


mongoose
  .connect(
    "mongodb+srv://jinadi:Anohana@123@cluster0-kbku3.mongodb.net/test?retryWrites=true+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular"
  ,{ useFindAndModify: false,useCreateIndex: true,useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);
app.use("/api/services",servicesRoutes);
app.use("/api/client",clientRoutes);
app.use("/api/appointment",appointmentRoutes);
app.use("/api/billing",billingRoutes);
app.use("/api/chart",chartRoutes);

module.exports = app;
