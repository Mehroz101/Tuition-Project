const express = require("express");
const {
  LoginUser,
  SignupUser,
  forget,
  resetpass,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", LoginUser);
router.post("/signup", SignupUser);
router.post("/forget", forget);
router.put("/reset", resetpass);
module.exports = router;
