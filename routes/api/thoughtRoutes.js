const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtByID,
  addThought,
} = require("../../controllers/thoughtController");

const { route } = require("./userRoutes");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/userId
router.route("/:userId").post(addThought);

// /api/thoughts/thoughtId
router.route("/:thoughtId").get(getThoughtByID);

module.exports = router;
