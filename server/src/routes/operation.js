const express = require("express");
const router = express.Router();
const operation = require("../controllers/operationController");

router.get("/", operation.index);

module.exports = router;
