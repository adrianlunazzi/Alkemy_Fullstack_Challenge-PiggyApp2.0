const express = require("express");
const router = express.Router();
const category = require("../controllers/categoryController");
const { protect } = require("../middlewares/AuthMiddleware");

router.get("/", protect, category.index);
router.get("/:id", protect, category.detail);
router.post("/", protect, category.create);
router.put("/:id", protect, category.edit);

module.exports = router;
