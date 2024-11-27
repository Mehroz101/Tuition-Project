const Teacher = require("../models/Teacher");
const Education = require("../models/Education");

const UpdateInformation = async (req, res) => {
  try {
    const teacherId = req.user.id; // Assuming req.user.id is the authenticated user's ID
    console.log("Teacher ID:", teacherId);

    const updatedData = req.body;

    // Use findOneAndUpdate with upsert to create if not found
    const response = await Teacher.findOneAndUpdate(
      { teacherId },
      { $set: updatedData },
      { upsert: true, new: true } // upsert: creates a new document if none is found
    );

    if (response) {
      res.status(200).json({
        success: true,
        message: "Information updated successfully",
        data: response, // Optional: Return the updated or created data
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Failed to update or add information",
      });
    }
  } catch (error) {
    console.error("Error updating information:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getTeacherInformation = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const response = await Teacher.findOne({ teacherId });
    if (response) {
      res.status(200).json({
        success: true,
        data: response,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Information not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const education = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const response = await Education.findByIdAndUpdate({ teacherId });
    if (response) {
      res.status(200).json({
        success: true,
        data: response,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Information not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = { UpdateInformation, getTeacherInformation };
