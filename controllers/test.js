const helloWorld = (req, res) => {
  /*
        #swagger.tags["Hello World"];
    */
  res.send("Hello World!");
};

module.exports = {
  helloWorld
};
