// Bring in any controllers
// const AuthenticationController = require("./controllers/AuthenticationController");

const TestController = require("./controllers/TestController");
const RegisterUser = require("./controllers/RegisterUser");
const UserStates = require("./controllers/UserStates");
const Uploads = require("./controllers/Uploads");
const UploadsTest = require("./controllers/UploadsTest");

const passport = require("passport");

module.exports = app => {
  app.get("/test", TestController.index);
  app.post("/register", RegisterUser.register);
  app.post("/login", UserStates.login);
  app.post("/upload", Uploads.index);
  app.post("/upload-test", UploadsTest.index);
};
