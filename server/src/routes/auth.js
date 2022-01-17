const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/", auth.index);
router.post("/", auth.login);
router.post("/register", auth.register);

module.exports = router;
