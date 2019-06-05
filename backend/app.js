const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");
const postRoutes=require('./routes/posts');
const app = express();


mongoose
  .connect(
    "mongodb+srv://jinadi:Anohana@123@cluster0-kbku3.mongodb.net/test?retryWrites=true+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular"
  ,{ useNewUrlParser: true })
  .then(() => {
    console.log("Consnected to database!");
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

module.exports = app;
