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
const UpdateSubjectInformation = async (req, res) => {
  try {
    const teacherId = req.user.id; // Assuming req.user.id is the authenticated user's ID
    console.log("Teacher ID:", teacherId);

    const { level, subject } = req.body;

    if (level && subject) {
      // Update the subjects array without duplicating entries
      const response = await Teacher.findOneAndUpdate(
        { teacherId },
        {
          $addToSet: {
            subjects: { subject, level },
          },
        },
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
    } else {
      res.status(400).json({
        success: false,
        message: "Level and subject are required.",
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
const GetSubjectInformation = async (req, res) => {
  try {
    const teacherId = req.user.id; // Assuming req.user.id is the authenticated user's ID
    console.log("Teacher ID:", teacherId);

    const response = await Teacher.findOne(
      { teacherId },
      { subjects: 1, _id: 0 } // Include 'subjects' and exclude '_id'
    );

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
    console.error("Error updating information:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const RemoveSubject = async (req, res) => {
  try {
    const teacherId = req.user.id; // Assuming req.user.id is the authenticated user's ID
    console.log("Teacher ID:", teacherId);
    console.log(req.body);

    const { subject } = req.body;

    if (subject) {
      // Update the subjects array without duplicating entries
      const response = await Teacher.findOneAndUpdate(
        { teacherId },
        {
          $pull: {
            subjects: { subject },
          },
        },
        { upsert: true, new: true } // upsert: creates a new document if none is found
      );

      if (response) {
        res.status(200).json({
          success: true,
          message: "subject removed successfully",
          data: response, // Optional: Return the updated or created data
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Failed to remove subject",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Subject is required.",
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
module.exports = {
  UpdateInformation,
  getTeacherInformation,
  UpdateSubjectInformation,
  GetSubjectInformation,
  RemoveSubject,
};
