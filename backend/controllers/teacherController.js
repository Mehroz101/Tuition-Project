const Teacher = require("../models/Teacher");
const Education = require("../models/Education");
const Invitation = require("../models/Invitation");
const User = require("../models/User");

const UpdateInformation = async (req, res) => {
  try {
    const teacherId = req.user.id; // Assuming req.user.id is the authenticated user's ID
    // console.log("Teacher ID:", teacherId);

    const updatedData = req.body;

    // Use findOneAndUpdate with upsert to create if not found
    const createdStd = await Teacher.findOneAndUpdate(
      { teacherId },
      { $set: updatedData },
      { upsert: true, new: true } // upsert: creates a new document if none is found
    );

    if (createdStd) {
      const response = await User.findOneAndUpdate(
        { _id: teacherId },
        { $set: { teacherId: createdStd._id } }, // Use an object to set the field name
        { upsert: true, new: true }
      );
      res.status(200).json({
        success: true,
        message: "Information updated successfully",
        // Optional: Return the updated or created data
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
    // console.log("Teacher ID:", teacherId);

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
    // console.log("Teacher ID:", teacherId);

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
    // console.log("Teacher ID:", teacherId);
    // console.log(req.body);

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
const setAvailabilty = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const availability = req.body;
    const response = await Teacher.findOneAndUpdate(
      { teacherId },
      { $set: { availability } },
      { upsert: true, new: true }
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
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getAvailabilty = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const response = await Teacher.findOne(
      { teacherId },
      { availability: 1, _id: 0 }
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
// const AddEducation = async (req, res) => {
const getTeacherInvitations = async (req, res) => {
  try {
    const teacherId = req.user.id;

    const invitations = await Invitation.find({ teacherId }).populate({
      path: "studentId", // Populate student data
      populate: {
        path: "studentId", // Assuming there is a reference in student model
        model: "Student", // Reference model name
      },
    });
    if (!invitations || invitations.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No invitations found for this teacher",
      });
    }
    // console.log(invitations);

    res.status(200).json({
      success: true,
      data: invitations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const acceptInvtation = async (req, res) => {
  try {
    const invitationId = req.params.id;
    const response = await Invitation.findByIdAndUpdate(invitationId, {
      status: "accepted",
    });
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
const rejectInvtation = async (req, res) => {
  try {
    const invitationId = req.params.id;
    const response = await Invitation.findByIdAndUpdate(invitationId, {
      status: "rejected",
    });
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
    const teacherId = req.user.id; // Assuming the logged-in user ID is passed in the request
    const { educationId, ...educationData } = req.body; // Extract educationId and the rest of the data from the request
    let response;

    if (educationId) {
      console.log();
      // Check if an education record with the given educationId exists
      response = await Education.findByIdAndUpdate(
        educationId,
        { ...educationData, teacherId },
        { new: true, runValidators: true } // Returns the updated document and ensures validation
      );

      if (!response) {
        return res.status(404).json({
          success: false,
          message: "Education record not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Education updated successfully",
        data: response,
      });
    } else {
      console.log(teacherId);

      // Create a new education record if educationId is not provided
      response = new Education({ ...educationData, teacherId });
      await response.save();
      console.log(response);
      return res.status(201).json({
        success: true,
        message: "Education added successfully",
        data: response,
      });
    }
  } catch (error) {
    console.error("Error in AddOrUpdateEducation:", error.message);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getEducation = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const response = await Education.find({ teacherId: teacherId });
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getSpecificEducation = async (req, res) => {
  try {
    const { educationId } = req.params;
    if (educationId) {
      const response = await Education.findById(educationId);
      if (response) {
        console.log(response)
        res.status(200).json({
          success: true,
          data: response,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Education detail not found",
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


module.exports = {
  UpdateInformation,
  getTeacherInformation,
  UpdateSubjectInformation,
  GetSubjectInformation,
  RemoveSubject,
  setAvailabilty,
  getAvailabilty,
  getTeacherInvitations,
  acceptInvtation,
  rejectInvtation,
  education,
  getSpecificEducation,
  getEducation
};
