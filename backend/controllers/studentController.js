const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

const studentInformation = async (req, res) => {
  try {
    const {
      fName,
      lName,
      class: className,
      address,
      city,
      number,
      schoolName,
    } = req.body;
    const studentId = req.user.id;
    // console.log(studentId);
    if (
      fName === "" ||
      lName === "" ||
      className === "" ||
      address === "" ||
      city === "" ||
      number === "" ||
      schoolName === ""
    ) {
      res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    } else {
      const stdFound = await Student.findOne({ studentId });
      // console.log(stdFound);
      if (!stdFound) {
        const studentInfo = new Student({
          studentId,
          fName,
          lName,
          className,
          address,
          city,
          number,
          schoolName,
        });
        const createdStd = await studentInfo.save();
        const response = await User.findOneAndUpdate(
          { _id: studentId },
          { $set: { studentId: createdStd._id } }, // Use an object to set the field name
          { upsert: true, new: true }
        );
        // console.log("response");
        // console.log(response);

        res.status(201).json({
          success: true,
          message: "Information update successfully",
        });
      } else {
        stdFound.fName = fName;
        stdFound.lName = lName;
        stdFound.className = className;
        stdFound.city = city;
        stdFound.address = address;
        stdFound.number = number;
        stdFound.schoolName = schoolName;
        const updatedStd = await stdFound.save();

        const response = await User.findOneAndUpdate(
          { _id: studentId },
          { $set: { studentId: updatedStd._id } }, // Use an object to set the field name
          { upsert: true, new: true }
        );
        // console.log("response");
        // console.log(response);

        res.status(201).json({
          success: true,
          message: "Information update successfully",
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
const getStudentInformation = async (req, res) => {
  try {
    const studentId = req.user.id;
    const stdFound = await Student.findOne({ studentId });
    // console.log(stdFound);
    if (stdFound) {
      res.status(200).json(stdFound);
    } else {
      res.status(404).json({
        success: false,
        message: "Information not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const sendInvitation = async (req, res) => {
  try {
    const studentId = req.user.id;
    const {
      offeredPrice,
      tuitionType,
      from,
      to,
      subject,
      description,
      teacherId,
    } = req.body;
    // console.log(req.body);
    // Check for missing fields
    if (
      !offeredPrice ||
      !tuitionType ||
      !from ||
      !to ||
      !subject ||
      !description ||
      !teacherId
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if teacher exists
    const isTeacher = await User.findById(teacherId);
    if (!isTeacher) {
      return res.status(400).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // Create and save the invitation
    const data = new Invitation({
      studentId,
      teacherId,
      offeredPrice,
      tuitionType,
      from,
      to,
      subject,
      description,
    });

    await data.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Invitation sent successfully",
    });
  } catch (error) {
    // Handle server errors
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getInvitation = async (req, res) => {
  try {
    const studentId = req.user.id;
    // const response = await Invitation.find({ studentId: studentId });
    const response = await Invitation.find({ studentId }).populate({
      path: "teacherId", // Populate student data
      populate: {
        path: "teacherId", // Assuming there is a reference in student model
        model: "Teacher", // Reference model name
      },
    });
    // .populate({
    //   path: "teacherId", // Populate teacher data
    //   populate: {
    //     path: "teacherId", // Assuming there is a reference in teacher model
    //     model: "Teacher", // Reference model name
    //   },
    // });
    if (response) {
      res.status(200).json({
        success: true,
        data: response,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Invitation found",
      });
    }
    3;
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const cancelInvitation = async (req, res) => {
  try {
    const invitationId = req.params.id;
    const response = await Invitation.findByIdAndDelete(invitationId);
    if (response) {
      res.status(200).json({
        success: true,
        message: "Invitation cancelled successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Invitation not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const uploadImage = async (req, res) => {
  try {
    const studentId = req.user.id;
    const student = await Student.findOne({ studentId });
console.log("uploaded img")
console.log(req.file)
    if (student) {
      // Check if the student already has an image
      if (student.image) {
        const imagePath = path.join(__dirname, "../uploads", student.image);
        try {
          // Check if the image file exists before trying to delete it
          await fs.promises.access(imagePath, fs.constants.F_OK);
          await fs.promises.unlink(imagePath); // Delete the existing image
        } catch (err) {
          if (err.code === "ENOENT") {
            // If the file doesn't exist, skip the deletion step
            console.log("Image file not found, skipping deletion.");
          } else {
            // Handle other types of errors, such as permission issues
            console.error("Error deleting the image:", err);
            return res.status(500).json({
              success: false,
              message: "Failed to delete existing image",
            });
          }
        }
      }

      // Set the new image filename
      student.image = req.file.filename;

      // Save the updated student document with the new image
      await student.save();

      res.status(200).json({
        success: true,
        message: "Image updated successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = {
  studentInformation,
  sendInvitation,
  getInvitation,
  getStudentInformation,
  cancelInvitation,
  uploadImage,
};
