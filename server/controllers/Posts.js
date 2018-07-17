// Bring in user model
let Post = require("../models/post");

module.exports = {
  index(req, res) {
    Post.find({}, function(err, posts) {
      if (err) {
        console.log(err);
      } else {
        res.send(posts);
      }
    });
  },
  singlePost(req, res) {
    console.log(req.params.postId);
    Post.findById(req.params.postId, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log(post);
        res.send(post);
      }
    });
  },
  add(req, res) {
    const src = req.body.src;
    const likes = 0;
    const comments = [
      {
        user: "Bat",
        body: "Man"
      },
      {
        user: "God",
        body: "I am the I am"
      },
      {
        user: "Yuuuooooppp",
        body: "Ice cream"
      }
    ];

    // req.checkBody("username", "Username is Required").notEmpty();

    let errors = req.validationErrors();

    if (errors) {
      // remove this console log later
      console.log(errors);
      res.send({
        errors
      });
    } else {
      let newPost = new Post({
        src,
        likes,
        comments
      });

      newPost.save(function(err) {
        if (err) {
          console.log(err);
          return;
        } else {
          // Remove this console log later
          console.log(err);
          res.send({
            newPost
          });
        }
      });
    }
  }
};
