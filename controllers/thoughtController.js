const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //   get one thought by ID
  getThoughtByID({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found with this ID" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
