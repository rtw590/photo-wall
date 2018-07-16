module.exports = {
  index(req, res) {
    console.log("backend hit");
    res.send([
      {
        title: "My Friend",
        src: "1.png",
        _id: 1,
        likes: 5,
        comments: [
          {
            user: "Mike",
            body: "This is mikes comment"
          },
          {
            user: "Dan",
            body: "This is dan comment"
          },
          {
            user: "Smith",
            body: "This is Smiths comment"
          }
        ]
      },
      {
        title: "Catdog",
        src: "ksg.png",
        _id: 2
      },
      {
        title: "Man o meen",
        src: "lebron.png",
        _id: 3
      },
      {
        title: "My ",
        src: "better-together.jpg",
        _id: 4
      },
      {
        title: "My Shoe",
        src: "vertical.jpg",
        _id: 5
      },
      {
        title: "Yoyoyoy",
        src: "1.png",
        _id: 6
      }
    ]);
  },
  singlePost(req, res) {
    console.log("backend hit");
    console.log(req.params.postId);
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
  }
};
