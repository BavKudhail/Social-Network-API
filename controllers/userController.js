const { User, Thought } = require("../models");

// create user controller variable

module.exports = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   get one user by their ID
  getUserById({ params }, res) {
    //   find one user
    User.findOne({ _id: params.id })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   create a user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
};
