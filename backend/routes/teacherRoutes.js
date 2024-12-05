const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  UpdateInformation,
  getTeacherInformation,
  education,
  // AddEducation,
  getEducation,
  getSpecificEducation,
  UpdateSubjectInformation,
  GetSubjectInformation,
  RemoveSubject,
  setAvailabilty,
  getAvailabilty,
  getTeacherInvitations,
  acceptInvtation,
  rejectInvtation,
  closeInvtation,
  getTeacherList,
  getTeacherDetail,
  getTeacherEducation,
  uploadImage,
  //   Education,
} = require("../controllers/teacherController");
const uploadMiddleware = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/updateinformation", authenticateToken, UpdateInformation);
router.post(
  "/updatesubjectinformation",
  authenticateToken,
  UpdateSubjectInformation
);
router.get("/teacherList", getTeacherList);
router.get("/teacherdetail/:teacherId", getTeacherDetail);
router.get("/getinformation", authenticateToken, getTeacherInformation);
router.post("/education", authenticateToken, education);
// router.post("/education", authenticateToken, AddEducation);
router.get("/geteducation", authenticateToken, getEducation);
router.get(
  "/geteducation/:educationId",
  authenticateToken,
  getSpecificEducation
);
router.get("/teachereducationdetail/:teacherId", getTeacherEducation);
router.get("/getsubject", authenticateToken, GetSubjectInformation);
router.post("/deletesubject", authenticateToken, RemoveSubject);
router.post("/availabilty", authenticateToken, setAvailabilty);
router.get("/getavailabilty", authenticateToken, getAvailabilty);
router.get("/getteacherinvtation", authenticateToken, getTeacherInvitations);
router.post("/acceptinvtation/:id", authenticateToken, acceptInvtation);
router.post("/rejectinvtation/:id", authenticateToken, rejectInvtation);
router.post("/closeinvtation/:id", authenticateToken, closeInvtation);
router.post("/upload", authenticateToken, uploadMiddleware, uploadImage);

// router.post("/education", authenticateToken, Education);

module.exports = router;
