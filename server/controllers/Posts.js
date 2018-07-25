// Bring in user model
let Post = require("../models/post");
let User = require("../models/user");

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
  profile(req, res) {
    console.log("profile backend hit");
    console.log(req.params.loggedInUsername);
    Post.find(
      {
        postedBy: req.params.username
      },
      null,
      { sort: "-date" },
      function(err, posts) {
        if (err) {
          console.log(err);
        } else {
          // let following = false;
          // if (req.user != undefined) {
          //   following = userProfile.followedBy.includes(
          //     req.user._id.toString()
          //   );
          // }
          res.send(posts);
        }
      }
    );
  },
  followingOrNot(req, res) {
    console.log("profile backend hit");
    console.log(req.params.loggedInUsername);
    User.findOne(
      {
        username: req.params.username
      },
      // null,
      // { sort: "-date" },
      function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log("this console log is on the followingOrNot");
          let following = false;
          if (req.params.loggedInUsername != undefined) {
            following = user.followedBy.includes(
              req.params.loggedInUsername.toString()
            );
          }
          res.send(following);
        }
      }
    );
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
    const postedBy = "lebron";
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
        postedBy,
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
  },
  async postComment(req, res) {
    const { username, userId, postId, comment } = req.body;
    await Post.findById(postId, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        post.comments.push({
          user: username,
          userId: userId,
          body: comment
        });
        post.save();
        res.send(post);
      }
    });
  },
  follow(req, res) {
    // Find logged in user
    User.findById(req.params.userId, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        // If already following...
        if (user.following.includes(req.params.pageOn)) {
          filteredArray = user.following.filter(
            item => item !== req.params.pageOn.toString()
          );
          user.following = filteredArray;
          user.save();

          // Remove the follower from the user whose page we are on
          User.findOne({ username: req.params.pageOn }, function(err, user2) {
            if (err) {
              console.log(err);
            } else {
              console.log(`found user of page on ${user2}`);
              filteredArray = user2.followedBy.filter(
                item => item !== user.username
              );
              user2.followedBy = filteredArray;
              user2.save();
            }
          });

          res.send(user);
          // Else not already following
        } else {
          user.following.push(req.params.pageOn.toString());
          user.save();

          // Add the follower from the user whose page we are on
          User.findOne({ username: req.params.pageOn }, function(err, user2) {
            if (err) {
              console.log(err);
            } else {
              user2.followedBy.push(user.username.toString());
              user2.save();
            }
          });
          res.send(user);
        }
      }
    });
  }
};
