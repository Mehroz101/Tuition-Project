const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const crypto = require("crypto"); // Signup function
const sendEmail = require("../utils/sendEmail");
const Admin = require("../models/Admin");
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

    const isRole = isUserExist.filter((user) => user.role === role);
    if (isRole[0]) {
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
const forget = async (req, res) => {
  const email = req.body.email;
  const role = req.body.role;

  try {
    const user = await User.findOne({ email, role });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpires = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetPasswordExpires;
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/resetpassword/${role}/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) has requested a password reset. Please make a PUT request to the following link to complete the process: \n\n${resetUrl}`;

    const isSend = await sendEmail(email, "Password Reset", message);

    if (isSend === 200) {
      return res.status(200).json({
        success: true,
        message: "Check your email",
        user: user,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    }
  } catch (error) {
    console.error("Error in forget password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const resetpass = async (req, res) => {
  const { token, password, role } = req.body;

  try {
    const user = await User.findOne({
      role: role,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });


    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Password reset token is invalid or has expired",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const AdminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isUserExist = await Admin.findOne({ username });
    if (!isUserExist) {
      return res.status(404).json({
        success: false,
        message: "username not found",
      });
    }
    const isMatch = await bcryptjs.compare(password, isUserExist.password);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    } else {
      const token = generateToken(isUserExist); // Generate JWT token
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const AdminSignup = async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(422).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin already exists",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    const createdAdmin = await newAdmin.save();
    res.status(201).json({
      success: true,
      message: "Admin registered successfully!",
      user: createdAdmin,
    });
  } catch (error) {
    console.error(`Error in adminSignup function - ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const checkLogin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Login successful",
      admin,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const changepassword = async (req, res) => {
  try {
    const { username, oldPassword, newPassword } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    const isMatch = await bcryptjs.compare(oldPassword, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }
    const hashPassowrd = await bcryptjs.hash(newPassword, 10);
    admin.password = hashPassowrd;
    await admin.save();
    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
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
  resetpass,
  forget,
  AdminLogin,
  AdminSignup,
  checkLogin,
  changepassword,
};
