const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  UpdateInformation,
  getTeacherInformation,
  UpdateSubjectInformation,
  GetSubjectInformation,
  RemoveSubject,
  //   Education,
} = require("../controllers/teacherController");

const router = express.Router();

router.post("/updateinformation", authenticateToken, UpdateInformation);
router.post(
  "/updatesubjectinformation",
  authenticateToken,
  UpdateSubjectInformation
);
router.get("/getinformation", authenticateToken, getTeacherInformation);
router.get("/getsubject", authenticateToken, GetSubjectInformation);
router.post("/deletesubject", authenticateToken, RemoveSubject);
// router.post("/education", authenticateToken, Education);

module.exports = router;
