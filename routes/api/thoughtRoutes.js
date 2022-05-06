const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtByID,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

const { route } = require("./userRoutes");

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/userId
router.route("/:userId").post(addThought);

// /api/thoughts/thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtByID)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughtId/reactions/reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
