const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
const { protect } = require("../middlewares/AuthMiddleware");

router.get("/", protect, user.index);

module.exports = router;
