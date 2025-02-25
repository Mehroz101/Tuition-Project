const mongoose = require("mongoose");
const invitationScheema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    offeredPrice: {
      type: Number,
      require: true,
    },
    tuitionType: {
      type: String,
      require: true,
    },
    from: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    link: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    review: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "closed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
const Invitation = mongoose.model("Invitation", invitationScheema);
module.exports = Invitation;
