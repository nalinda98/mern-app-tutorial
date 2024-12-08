const express = require("express");
const dateEnable = require("./date.route.js");

const router = express.Router();

router.use("/date", dateEnable);

module.exports = router;
