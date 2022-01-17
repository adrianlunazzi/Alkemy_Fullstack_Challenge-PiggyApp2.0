const express = require("express");
const router = express.Router();
const operationType = require("../controllers/operationTypeController");
const { protect } = require("../middlewares/AuthMiddleware");

router.get("/", operationType.index);

module.exports = router;
