const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email!",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minlength: 6,
    maxlength: 18,
  },
  role: {
    type: String,
    enumm: ["admin", "user"],
    default: "user",
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
