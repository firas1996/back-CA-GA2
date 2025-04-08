const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Email is invalid !!!"],
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    validate: function (cPass) {
      return cPass === this.password;
    },
    message: "pass and cPass does not match !!!!",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  last_password_time_updated: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
