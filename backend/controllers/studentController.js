const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const User = require("../models/User");

const Teacher = require("../models/Teacher");
const cloudinary = require("cloudinary").v2;

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


        res.status(201).json({
          success: true,
          message: "Information update successfully",
        });
      }
    }
  } catch (error) {

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

    if (stdFound) {
      res.status(200).json(stdFound);
    } else {
      res.status(404).json({
        success: false,
        message: "Information not found",
      });
    }
  } catch (error) {

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

    let student = await Student.findOne({ studentId });



    if (!student) {
      student = new Student({ studentId });
    }

    // If an old image exists in Cloudinary, delete it
    if (student.image) {
      try {
        const parts = student.image.split("/uploads/")[1]; // "1759304512171-67146676.png"
        const publicId = "uploads/" + parts.split(".")[0]; // "uploads/1759304512171-67146676"



        const result = await cloudinary.uploader.destroy(publicId);

      } catch (err) {
        console.error("Error deleting the image from Cloudinary:", err);
        return res.status(500).json({
          success: false,
          message: "Failed to delete existing image from Cloudinary",
        });
      }
    }

    // Cloudinary multer stores file info in req.file


    // Save the Cloudinary public_id (so we can delete later)
    student.image = req.file.path;

    await student.save();



    res.status(200).json({
      success: true,
      message: student.isNew
        ? "Student created and image uploaded successfully"
        : "Image updated successfully",
      imageUrl: req.file.path, // Cloudinary URL
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



const submitReview = async (req, res) => {

  try {
    const { rating, review, InvitationId } = req.body;

    if (!InvitationId) {

      return res.status(400).json({
        success: false,
        message: "Invitation not found",
      });
    }

    const response = await Invitation.findOneAndUpdate(
      { _id: InvitationId },
      { $set: { rating, review } },
      { upsert: true, new: true }
    );

    const updateTeacher = await Teacher.findOne({
      teacherId: response.teacherId,
    });

    updateTeacher.rating = (updateTeacher.rating + rating) / 2;
    updateTeacher.ratingCount = updateTeacher.ratingCount + 1;
    await updateTeacher.save();

    if (response) {

      res.status(200).json({
        success: true,
        message: "Review submitted successfully",
      });
    } else {

      res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const AllStudents = async (req, res) => {
  try {
    const response = await Student.find({}).populate("studentId");
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
      message: "Internal Server Error",
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
  submitReview,
  AllStudents
};
