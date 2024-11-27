const express = require("express");
const { studentInformation,sendInvitation,getInvitation,getStudentInformation } = require("../controllers/studentController");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/information",authenticateToken,studentInformation)
router.get("/getinformation",authenticateToken,getStudentInformation)
router.post("/sendinvtation",authenticateToken,sendInvitation)
router.get("/getinvtation",authenticateToken,getInvitation)


module.exports = router