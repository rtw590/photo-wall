// Bring in user model
let Post = require("../models/post");

module.exports = {
  index(req, res) {
    Post.find({}, function(err, posts) {
      if (err) {
        console.log(err);
      } else {
        console.log(posts);
        res.send(posts);
      }
    });
  },
  singlePost(req, res) {
    res.send({
      title: "My Friend",
      src: "lebron.png",
      _id: 1,
      likes: 5,
      comments: [
        {
          user: "Mike",
          body: "This is mikes comment"
        },
        {
          user: "Dan",
          body:
            "This is dan comment. Dan just could not shutup about this picture. He loved it so much and thinks it is cool"
        },
        {
          user: "Smith",
          body: "This is Smiths comment"
        }
      ]
    });
  },
  add(req, res) {
    const src = req.body.src;
    const likes = 0;
    const comments = [
      {
        user: "dan",
        body: "Do you understand the words that are coming out of my mouth"
      },
      {
        user: "rob",
        body: "Meeeooowwww"
      },
      {
        user: "The Rock",
        body: "Do you smell what I am cooking?"
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
