const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const crypto = require("crypto"); // Signup function
const sendEmail = require("../utils/sendEmail");

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
    console.log(error.message);
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
      console.log("User not found for email:", email);
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpires = Date.now() + 3600000; // 1 hour
    console.log("Generated reset token:", resetToken);

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetPasswordExpires;
    await user.save();
    console.log("User updated with reset token and expiry");

    const resetUrl = `${process.env.CLIENT_URL}/resetpassword/${role}/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) has requested a password reset. Please make a PUT request to the following link to complete the process: \n\n${resetUrl}`;
    console.log("Reset URL:", resetUrl);

    const isSend = await sendEmail(email, "Password Reset", message);
    console.log("Email send status:", isSend);

    if (isSend === 200) {
      console.log("Reset email sent successfully");
      return res.status(200).json({
        success: true,
        message: "Check your email",
        user: user,
      });
    } else {
      console.log("Failed to send reset email");
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
  console.log("resetPassword function called");
  const { token, password, role } = req.body;
  console.log("token:", token);
  console.log("password:", password);
  console.log("role:", role);

  try {
    const user = await User.findOne({
      role: role,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    console.log("user:", user);

    if (!user) {
      console.log("User not found");
      return res.status(400).json({
        success: false,
        message: "Password reset token is invalid or has expired",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    console.log("hashedPassword:", hashedPassword);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
    console.log("User saved");

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
module.exports = {
  LoginUser,
  SignupUser,
  resetpass,
  forget,
};
