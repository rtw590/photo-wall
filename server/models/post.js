const mongoose = require("mongoose");

// Post Schema
const PostSchema = mongoose.Schema({
  src: {
    type: String
  },
  postedBy: String,
  likes: {
    type: Number
  },
  likedBy: [],
  comments: [],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = (module.exports = mongoose.model("Post", PostSchema));
