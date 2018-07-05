// Bring in any controllers
// const AuthenticationController = require("./controllers/AuthenticationController");

const TestController = require("./controllers/TestController");
const RegisterUser = require("./controllers/RegisterUser");
const UserStates = require("./controllers/UserStates");
const Uploads = require("./controllers/Uploads");
const UploadsTest = require("./controllers/UploadsTest");
const UploadsTestAcademind = require("./controllers/UploadsTestAcademind");

// Testing image upload route
const multer = require("multer");

let upload = multer({ storage: multer.memoryStorage() });

// This is seperate from above test
const passport = require("passport");

module.exports = app => {
  app.get("/test", TestController.index);
  app.post("/register", RegisterUser.register);
  app.post("/login", UserStates.login);
  app.post("/upload", Uploads.index);
  app.post("/upload-test", UploadsTest.index);
  app.post("/upload-test-Academind", UploadsTestAcademind.index);
  app.post("/single", upload.single("fileImage"), (req, res) => {
    console.log("backend hit");
    console.log(req.body);
    console.log(req.file);
    res.send();
  });
};
