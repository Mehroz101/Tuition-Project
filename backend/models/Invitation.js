const mongoose = require("mongoose");
const invitationScheema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
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
  },
  {
    timestamps: true,
  }
);
const Invitation = mongoose.model("Invitation", invitationScheema);
module.exports = Invitation;
