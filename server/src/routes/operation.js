const express = require("express");
const router = express.Router();
const operation = require("../controllers/operationController");
const { protect } = require("../middlewares/AuthMiddleware");

router.get("/", operation.list);
router.get("/:id", operation.detail);
router.post("/", operation.create);
router.put("/:id", operation.edit);
router.delete("/:id", operation.delete);

module.exports = router;
