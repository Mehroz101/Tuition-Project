const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fName: {
      type: String,
      // required: true,
      trim: true,
    },
    lName: {
      type: String,
      // required: true,
      trim: true,
    },
    tagline: {
      type: String,
      // required: true,
      trim: true,
    },
    fee: {
      type: String,
      // required: true,
      trim: true,
    },
    country: {
      type: String,
      // required: true,
      trim: true,
    },
    city: {
      type: String,
      // required: true,
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
      // required: true,
      trim: true,
    },
    number: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
    },
    whatsapp: {
      type: String,
      // required: true,
      trim: true,
    },
    website: {
      type: String,
      // required: true,
      trim: true,
    },
    subjects: [
      {
        subject: {
          type: String,
          // required: true,
          trim: true,
        },
        level: {
          type: String,
          // required: true,
          enum: ["Beginner", "Intermediate", "Advanced"], // You can customize the levels
          trim: true,
        },
      },
    ],
    availability: [
      {
        start: {
          type: String,
          // required: true,
          trim: true,
        },
        end: {
          type: String,
          // required: true,
          trim: true,
        },
      },
    ],
    image: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
