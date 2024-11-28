const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  UpdateInformation,
  getTeacherInformation,
  AddEducation,
  getEducation,
  getSpecificEducation
} = require("../controllers/teacherController");

const router = express.Router();

router.post("/updateinformation", authenticateToken, UpdateInformation);
router.get("/getinformation", authenticateToken, getTeacherInformation);
router.post("/education", authenticateToken, AddEducation);
router.get("/geteducation", authenticateToken, getEducation);
router.get("/geteducation/:educationId", authenticateToken, getSpecificEducation);

module.exports = router;
