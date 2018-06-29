// Bring in any controllers
// const AuthenticationController = require("./controllers/AuthenticationController");

const TestController = require("./controllers/TestController");
const RegisterUser = require("./controllers/RegisterUser");
const UserStates = require("./controllers/UserStates");

const passport = require("passport");

module.exports = app => {
  app.get("/test", TestController.index);
  app.post("/register", RegisterUser.register);
  app.post("/login", UserStates.login);
};
