const express = require("express");
const router = express.Router();

const { getResponse } = require("../controllers/ai.controller");

router.post("/", getResponse);

module.exports = router;
