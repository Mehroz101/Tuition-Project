const Book = require("../models/Book");
const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const GetDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch total students and teachers
    const GetStudent = await Student.find();
    const TotalStudent = GetStudent.length;
    const GetTeacher = await Teacher.find();
    const TotalTeacher = GetTeacher.length;

    // Fetch total revenue from accepted invitations
    const GetInvitations = await Invitation.find({ status: "accepted" });
    const TotalInvitations = GetInvitations.reduce(
      (accumulator, currentItem) => {
        return accumulator + currentItem.offeredPrice;
      },
      0
    );

    // Fetch last 7 days' invitation requests
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    const Last7DaysInvitations = await Invitation.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo, $lte: today },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, // Sort by date in ascending order
      },
    ]);

    // Fetch counts of invitations by status
    const InvitationStatusCounts = await Invitation.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    // Convert status counts to an object
    const statusCounts = {};
    InvitationStatusCounts.forEach((status) => {
      statusCounts[status._id] = status.count;
    });

    // Prepare response data
    const sendData = {
      TotalStudent,
      TotalTeacher,
      TotalRevenue: TotalInvitations,
      Last7DaysInvitations: Last7DaysInvitations.map((entry) => ({
        date: entry._id,
        count: entry.count,
      })),
      InvitationStatusCounts: {
        pending: statusCounts.pending || 0,
        closed: statusCounts.closed || 0,
        rejected: statusCounts.rejected || 0,
        accepted: statusCounts.accepted || 0,
      },
    };

    console.log(sendData);
    res.status(201).send({ success: true, data: sendData });
  } catch (error) {
    console.error("Error in GetDashboardData:", error.message);
    res.status(500).send({ success: false, message: "Server error" });
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
          name: `${std.fName} ${std.lName}`,
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
          studentName: `${invitation.studentId.studentId?.fName} ${invitation.studentId.studentId?.lName}`,
          teacherName: `${invitation.teacherId.teacherId?.fName} ${invitation.teacherId.teacherId?.lName}`,
          offeredPrice: invitation.offeredPrice,
          subject: invitation?.subject,
          rating: invitation?.rating,
          status: invitation?.status,
          review: invitation?.review,
        };
      });
      console.log(sendData);
      res.status(200).send({ success: true, data: sendData });
    } else {
      res.status(404).send({ success: false, message: "No data found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ success: false, message: "Server error" });
  }
};
const AddorUpdateBook = async (req, res) => {
  try {
    const { bookName, bookDesc, bookImgUrl,bookUrl } = req.body;
    const lastBook = await Book.findOne().sort({ BookID: -1 });
    const nextBookID = lastBook ? lastBook.BookID + 1 : 1;

    const createBook = await Book.create({
      BookID: nextBookID,
      BookName: bookName,
      BookDesc: bookDesc,
      BookUrl: bookUrl,
      ImgUrl: bookImgUrl,
    });
    if (createBook) {
      res
        .status(200)
        .send({ message: "Book added successfully", success: true });
    }
    else{
      res
        .status(400)
        .send({ message: "Book not added", success: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ success: false, message: "Server error" });
  }
};
const GetBooks = async (req,res)=>{
  try {
    const books = await Book.find()
    if (books) {
      res
        .status(200)
        .send({ message: "", success: true , data:books});
    }
    else{
      res
        .status(200)
        .send({ message: "Book not found", success: false, data:[] });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ success: false, message: "Server error" });
  }
}
const DeleteBook = async (req,res)=>{
  try {
    const bookId = req.params.id
    console.log(bookId)
    const book = await Book.findOneAndDelete({BookID:bookId})
    if (book) {
      res
        .status(200)
        .send({ message: "Book deleted successfully", success: true , });
    }
    else{
      res
        .status(200)
        .send({ message: "Book not found", success: false,});
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ success: false, message: "Server error" });
  }
}
module.exports = {
  GetDashboardData,
  AllStudentData,
  AllTeacherData,
  AllInvitationData,
  AddorUpdateBook,
  GetBooks,
  DeleteBook
};
