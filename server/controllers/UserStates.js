// const express = require("express");
// const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Bring in user model
let User = require("../models/user");

module.exports = {
  async login(req, res, next) {
    try {
      // Use destructuring to create variables for passed in email and password values
      const { username, password } = req.body;
      // Change this to a mongoose search
      const user = await User.findOne({
        username
      });
      // Return error is no user found with that email
      if (user == null) {
        console.log("user null if ran");
        return res.send({
          errors: "No user exists with that username"
        });
      }

      // Match password
      bcrypt.compare(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return res.send({
            user: user.username,
            userId: user._id,
            following: user.following,
            followedBy: user.followedBy
          });
        } else {
          return res.send({
            errors: "Login information in incorrect"
          });
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occured while trying to login"
      });
    }
  }
};
