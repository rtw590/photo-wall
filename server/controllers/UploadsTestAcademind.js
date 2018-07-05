const AWS = require("aws-sdk");

// Configure client for use with Spaces
const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint
});

module.exports = {
  index(req, res) {
    console.log("backend hit");
    console.log(req.body.fileImage);
    console.log(req.body.fd);
    console.log(req.fd);
    // var params = {
    //   Body: "The contents of the file",
    //   Bucket: "1410",
    //   Key: "message.txt"
    // };

    // s3.putObject(params, function(err, data) {
    //   if (err) console.log(err, err.stack);
    //   else console.log(data);
    // });
  }
};
