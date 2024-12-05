const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fName: {
      type: String,
      trim: true,
    },
    lName: {
      type: String,
      trim: true,
    },
    className: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    number: {
      type: String,
      trim: true,
    },
    schoolName: {
      type: String,
      trim: true,
    },
    image: { type: String, default: null }, // Field to store the uploaded image URL
  },
  {
    timestamps: true,
  }
);
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
