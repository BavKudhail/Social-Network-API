const router = require("express").Router();

const { getAllUsers, createUser } = require("../../controllers/userController");

// GET / POST routes for /api/users
router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
