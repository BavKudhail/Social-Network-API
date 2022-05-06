const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtByID,
} = require("../../controllers/thoughtController");

const { route } = require("./userRoutes");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getThoughtByID);

module.exports = router;
