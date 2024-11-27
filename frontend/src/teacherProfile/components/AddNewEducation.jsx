import React, { useEffect } from "react";
import TeacherEducationForm from "../../formHandler/TeacherForm/TeacherEducationForm";
import { useQuery } from "@tanstack/react-query";

const AddNewEducation = () => {
  const { teacherEducation, setTeacherEducation, handleChange, handleSubmit } =
    TeacherEducationForm();
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["studentProfile"],
  //   queryFn: GetEducationDetail,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.error("Error fetching student profile:", error.message);
  //     pushNotify(400, "SORRY", "Something went wrong. Try again later.");
  //   },
  //   onsettled: () => {
  //     console.log("fetching student profile");
  //   },
  // });

  // useEffect(() => {
  //   if (data) {
  //     setTeacherEducation({
  //       fName: data.fName || "",
  //       lName: data.lName || "",
  //       class: data.className || "",
  //       city: data.city || "",
  //       address: data.address || "",
  //       number: data.number || "",
  //       schoolName: data.schoolName || "",
  //     });
  //   }
  // }, [data, setStudentProfile]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <>
      <div className="add_new_education">
        <h3 className="right_box_heading">Add/Edit education</h3>
        <div className="education_form">
          <form onSubmit={handleFormSubmit}>
            <div className="input_box">
              <label htmlFor="">Degree/course title</label>
              <div className="input">
                <i className="fa-solid fa-graduation-cap"></i>
                <input
                  type="text"
                  name="degreeName"
                  value={teacherEducation.degreeName}
                  onChange={handleChange}
                  placeholder="Enter title here"
                />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="">University/Institute title</label>
              <div className="input">
                <i className="fa-solid fa-school"></i>
                <input
                  type="text"
                  name="instituteName"
                  value={teacherEducation.instituteName}
                  onChange={handleChange}
                  placeholder="Enter title here"
                />
              </div>
            </div>
            <div className="combo_box date">
              <label htmlFor="">Start & end date</label>
              <div className="input_box input_date_box">
                <div className="input">
                  <input
                    type="date"
                    name="startDate"
                    value={teacherEducation.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <input
                    type="date"
                    name="endData"
                    value={teacherEducation.endData}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input_box"></div>
            </div>
            <div className="input_box">
              <label htmlFor="">Description</label>
              <div className="input">
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  name="description"
                  value={teacherEducation.description}
                  onChange={handleChange}
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <input type="submit" value="Update" className="submit_btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewEducation;
