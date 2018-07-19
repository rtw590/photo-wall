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
    Post.findById(req.params.postId, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        res.send(post);
      }
    });
  },
  add(req, res) {
    const src = req.body.src;
    const likes = 0;
    const likedBy = [];
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
        comments,
        likedBy
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
  },
  async like(req, res) {
    await Post.findById(req.params.postId, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        if (post.likedBy.includes(req.params.userId)) {
          filteredArray = post.likedBy.filter(
            item => item !== req.params.userId.toString()
          );
          post.likedBy = filteredArray;
          post.likes -= 1;
          post.save();
          res.send(post);
        } else {
          post.likedBy.push(req.params.userId.toString());
          post.likes += 1;
          post.save();
          res.send(post);
        }
      }
    });
  }
};
