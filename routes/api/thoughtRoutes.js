const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtByID,
  addThought,
  updateThought,
  removeThought,
  addReaction,
} = require("../../controllers/thoughtController");

const { route } = require("./userRoutes");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/userId
router.route("/:userId").post(addThought);

// /api/thoughts/thoughtId
router.route("/:thoughtId").get(getThoughtByID).put(updateThought);

// /api/thoughts/userId/thoughtId
router.route("/:userId/:thoughtId").delete(removeThought);

// /api/thoughts/thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;
