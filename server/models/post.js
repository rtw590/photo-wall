const mongoose = require("mongoose");

// Post Schema
const PostSchema = mongoose.Schema({
  src: {
    type: String
  },
  likes: {
    type: Number
  },
  comments: []
});

const User = (module.exports = mongoose.model("Post", PostSchema));
