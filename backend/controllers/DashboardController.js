const Invitation = require("../models/Invitation");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

const GetDashboardData = async (req,res)=>{
try {
    const userId = req.user.id;
    const GetStudent = await Student.find()
    const TotalStudent = GetStudent.length;
    const GetTeacher = await Teacher.find()
    const TotalTeacher = GetTeacher.length;
    const GetInvitations = await Invitation.find({status:"accepted"})
    const TotalInvitations = GetInvitations.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.offeredPrice;
      }, 0);
      const sendData = {
        TotalStudent:TotalStudent,
        TotalTeacher:TotalTeacher,
        TotalRevenue:TotalInvitations
      }
    console.log(TotalStudent,TotalTeacher,TotalInvitations)
    res.status(201).send({success:true,data:sendData})
} catch (error) {
    
}
}
module.exports = {
    GetDashboardData
}