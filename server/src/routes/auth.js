const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");
const { validateJWT } = require("../middlewares/validateJWT");

router.get("/", auth.index);
router.get("/renew", validateJWT, auth.revalidateToken);
router.post("/", auth.login);
router.post("/register", auth.register);

module.exports = router;
