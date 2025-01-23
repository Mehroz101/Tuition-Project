const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const GetDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const GetStudent = await Student.find();
    const TotalStudent = GetStudent.length;
    const GetTeacher = await Teacher.find();
    const TotalTeacher = GetTeacher.length;
    const GetInvitations = await Invitation.find({ status: "accepted" });
    const TotalInvitations = GetInvitations.reduce(
      (accumulator, currentItem) => {
        return accumulator + currentItem.offeredPrice;
      },
      0
    );
    const sendData = {
      TotalStudent: TotalStudent,
      TotalTeacher: TotalTeacher,
      TotalRevenue: TotalInvitations,
    };
    console.log(TotalStudent, TotalTeacher, TotalInvitations);
    res.status(201).send({ success: true, data: sendData });
  } catch (error) {
    res.status(500).send({ success: false, message: "server error" });
  }
};
const AllStudentData = async (req, res) => {
  try {
    const studentData = await Student.find();
    if (studentData) {
      console.log(studentData.fName);
      const sendData = studentData.map((std, i) => {
        return {
          id: i,
          name: `${std.fName} ${std.fName}`,
          schoolName: std.schoolName,
          number: std.number,
          className: std.className,
          city: std.city,
        };
      });
      console.log(sendData);
      res.status(201).send({ success: true, data: sendData });
    } else {
      res.status(404).send({ success: false, message: "No data found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "server error" });
  }
};
const AllTeacherData = async (req, res) => {
  try {
    const teacherData = await Teacher.find();
    if (teacherData) {
      console.log(teacherData.fName);
      const sendData = teacherData.map((std, i) => {
        return {
          id: i,
          name: `${std.fName} ${std.fName}`,
          fee: std.fee,
          number: std.number,
          rating: std.rating,
          city: std.city,
        };
      });
      console.log(sendData);
      res.status(201).send({ success: true, data: sendData });
    } else {
      res.status(404).send({ success: false, message: "No data found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "server error" });
  }
};

const AllInvitationData = async (req, res) => {
  try {
    const InvitationData = await Invitation.find()
      .populate({
        path: "teacherId",
        populate: { path: "teacherId", model: "Teacher" },
      })
      .populate({
        path: "studentId",
        populate: { path: "studentId", model: "Student" },
      });

    if (InvitationData && InvitationData.length > 0) {
      const sendData = InvitationData.map((invitation) => {
        return {
          studentName: `${invitation.studentId.studentId.fName} ${invitation.studentId.studentId.lName}`,
          teacherName: `${invitation.teacherId.teacherId.fName} ${invitation.teacherId.teacherId.lName}`,
          offeredPrice: invitation.offeredPrice,
          subject: invitation.subject,
          rating: invitation.rating,
          status: invitation.status,
          review: invitation.review,
        };
      });
      console.log(sendData);
      res.status(200).send({ success: true, data: sendData });
    } else {
      res.status(404).send({ success: false, message: "No data found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Server error" });
  }
};

module.exports = { AllInvitationData };
module.exports = {
  GetDashboardData,
  AllStudentData,
  AllTeacherData,
  AllInvitationData,
};
