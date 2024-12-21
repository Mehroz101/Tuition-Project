const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  studentInformation,
  sendInvitation,
  getInvitation,
  getStudentInformation,
  cancelInvitation,
  uploadImage,
  submitReview,
} = require("../controllers/studentController");
const authenticateToken = require("../middleware/authMiddleware");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/information", authenticateToken, studentInformation);
router.get("/getinformation", authenticateToken, getStudentInformation);
router.post("/sendinvtation", authenticateToken, sendInvitation);
router.get("/getinvtation", authenticateToken, getInvitation);
router.post("/cancelinvtation/:id", authenticateToken, cancelInvitation);
router.post("/submitreview", authenticateToken, submitReview);
router.post("/upload", authenticateToken, uploadMiddleware, uploadImage);

module.exports = router;
