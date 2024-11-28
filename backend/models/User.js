const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher"],
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student", // This will reference the Student model
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher", // This will reference the Teacher model
    },
    adminAllow: {
      type: Boolean,
      default: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
