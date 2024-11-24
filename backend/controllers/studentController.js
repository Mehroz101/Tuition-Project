const Student = require("../models/Student");

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

module.exports = {
  studentInformation,
};
