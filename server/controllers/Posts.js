module.exports = {
  index(req, res) {
    console.log("backend hit");
    res.send([
      {
        title: "My Friend",
        src: "1.png"
      },
      {
        title: "Catdog",
        src: "ksg.png"
      },
      {
        title: "Man o meen",
        src: "lebron.png"
      },
      {
        title: "My ",
        src: "better-together.jpg"
      },
      {
        title: "My Shoe",
        src: "vertical.jpg"
      },
      {
        title: "Yoyoyoy",
        src: "1.png"
      }
    ]);
  },
  singlePost(req, res) {
    console.log("backend hit");
    res.send({
      title: "My Friend",
      src: "1.png"
    });
  }
};
