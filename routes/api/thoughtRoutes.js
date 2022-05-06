const router = require("express").Router();
const { getAllThoughts } = require("../../controllers/thoughtController");

const { route } = require("./userRoutes");

// /api/thoughts
router.route("/").get(getAllThoughts);

module.exports = router;
