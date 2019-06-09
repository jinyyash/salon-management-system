const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contactNum: {type: String}
});


module.exports = mongoose.model("UserData", userSchema);

