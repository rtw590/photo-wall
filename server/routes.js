// Bring in any controllers
// const AuthenticationController = require("./controllers/AuthenticationController");

const TestController = require("./controllers/TestController");

module.exports = app => {
  // app.get("/songs", SongsController.index);
  app.get("/test", TestController.index);
};
