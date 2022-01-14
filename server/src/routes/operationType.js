const express = require("express");
const router = express.Router();
const operationType = require("../controllers/operationTypeController");

router.get("/", operationType.index);

module.exports = router;
