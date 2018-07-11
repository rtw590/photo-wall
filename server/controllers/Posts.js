module.exports = {
  index(req, res) {
    console.log('backend hit')
    res.send(
      [
        {
          title: "My Friend",
          src: "1.png"
        },
        {
          title: "Catdog",
          src: "1.png"
        },
        {
          title: "Man o meen",
          src: "1.png"
        },
        {
          title: "My ",
          src: "1.png"
        },
        {
          title: "My Shoe",
          src: "1.png"
        }
      ]
    );
  }
};
