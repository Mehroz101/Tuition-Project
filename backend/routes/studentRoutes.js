const express = require("express");
const {
  studentInformation,
  sendInvitation,
  getInvitation,
  getStudentInformation,
  cancelInvitation,
} = require("../controllers/studentController");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/information", authenticateToken, studentInformation);
router.get("/getinformation", authenticateToken, getStudentInformation);
router.post("/sendinvtation", authenticateToken, sendInvitation);
router.get("/getinvtation", authenticateToken, getInvitation);
router.post("/cancelinvtation/:id", authenticateToken, cancelInvitation);

module.exports = router;
