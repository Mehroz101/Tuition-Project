const express = require("express");
const { studentInformation } = require("../controllers/studentController");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/information",authenticateToken,studentInformation)


module.exports = router