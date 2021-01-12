const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "username is required"
  },
  password: {
    type: String,
    trim: true,
    required: "password is required",
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  },
  email: {
    type: String,
    unique: true,
    match: "username is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;