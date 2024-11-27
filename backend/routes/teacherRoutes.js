const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  UpdateInformation,
  getTeacherInformation,
  //   Education,
} = require("../controllers/teacherController");

const router = express.Router();

router.post("/updateinformation", authenticateToken, UpdateInformation);
router.get("/getinformation", authenticateToken, getTeacherInformation);
// router.post("/education", authenticateToken, Education);

module.exports = router;
