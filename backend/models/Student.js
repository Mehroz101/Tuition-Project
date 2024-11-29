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
      required: true,
      trim: true,
    },
    lName: {
      type: String,
      required: true,
      trim: true,
    },
    className: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
    schoolName: {
      type: String,
      required: true,
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
