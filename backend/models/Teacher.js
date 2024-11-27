const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
  {
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
    tagline: {
      type: String,
      required: true,
      trim: true,
    },
    fee: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    studentHome: {
      type: Boolean,
    },
    teacherHome: {
      type: Boolean,
    },
    online: {
      type: Boolean,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
