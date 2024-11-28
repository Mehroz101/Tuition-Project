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
const AddEducation = async (req, res) => {
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
  AddEducation,
  getEducation,
  getSpecificEducation,
};
