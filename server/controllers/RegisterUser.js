// const express = require("express");
// const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Bring in user model
let User = require("../models/user");

module.exports = {
  register(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody("username", "Username is Required").notEmpty();
    req.checkBody("email", "Email is Required").isEmail();
    req.checkBody("password", "Password is Required").notEmpty();
    req
      .checkBody("password2", "Passwords do not match")
      .equals(req.body.password);

    let errors = req.validationErrors();

    if (errors) {
      // remove this console log later
      console.log(errors);
      res.send({
        errors
      });
    } else {
      let newUser = new User({
        username: username,
        email: email,
        password: password,
        following: [],
        followedBy: []
      });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser.save(function(err) {
            if (err) {
              console.log(err);
              return;
            } else {
              // Remove this console log later
              console.log(err);
              res.send({
                newUser
              });
            }
          });
        });
      });
    }
  }
};
