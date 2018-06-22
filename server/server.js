const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const session = require("express-session");
const passport = require("passport");
const config = require("./config/database");

mongoose.connect(config.database);
let db = mongoose.connection;

// Check Connection
db.once("open", function() {
  console.log("Connected to Mongodb");
});

//Check for db errors
db.on("error", function(err) {
  console.log(err);
});

// Init the app
const app = express();

// Express Session Middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

// Express Validator Middleware
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Passport config
require("./config/passport")(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("*", function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// bring in routres
require("./routes")(app);

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function() {
  console.log("Server started");
});
