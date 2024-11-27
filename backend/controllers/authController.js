const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

const LoginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const isUserExist = await User.find({ email });
    if (!isUserExist) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }
    // console.log(isUserExist)
    const isRole = isUserExist.filter((user) => user.role === role);
    if (isRole[0]) {
      console.log("user found");
      const isMatch = await bcryptjs.compare(password, isRole[0].password);
      if (!isMatch) {
        res.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      } else {
        const token = generateToken(isRole[0]); // Generate JWT token
        res.status(200).json({
          success: true,
          message: "Login successful",
          token: token,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const SignupUser = async (req, res) => {
  try {
    const { email, password: userPassword, cPassword, role } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist?.role == role) {
      return res.status(403).json({
        success: false,
        message: `Email already exist for ${role}`,
      });
    }
    if (userPassword === cPassword) {
      const password = await bcryptjs.hash(userPassword, 10);
      const user = new User({ email, password, role });
      const userCreated = await user.save();
      res.status(201).json({
        success: true,
        message: "Account created successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "password does not match",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  LoginUser,
  SignupUser,
};
