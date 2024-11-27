const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const User = require("../models/User");

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
    console.log(studentId);
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
      console.log(stdFound);
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
        await studentInfo.save();
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
        await stdFound.save();
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
    console.log(stdFound);
    if (stdFound) {
      res.status(200).json(stdFound);
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
    if (
      offeredPrice === "" ||
      tuitionType === "" ||
      from === "" ||
      to === "" ||
      subject === "" ||
      description === "" ||
      teacherId === ""
    ) {
      res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    const isTeacher = await User.findById(teacherId);
    if (!isTeacher) {
      res.status(400).json({
        success: false,
        message: "Teacher not found",
      });
    }

    const data = new Invitation({
      studentId,
      offeredPrice,
      tuitionType,
      from,
      to,
      subject,
      description,
    });
    await data.save();
    res.status(201).json({
      success: true,
      message: "Invitation sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const getInvitation = async (req, res) => {
  try {
    const studentId = req.user.id;
    const response = await find({ studentId: studentId });
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

module.exports = {
  studentInformation,
  sendInvitation,
  getInvitation,
  getStudentInformation,
};
