const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  last_name: String,
}, {
  timestamps : true
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;