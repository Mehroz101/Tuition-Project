import React from "react";
import TeacherSubjectForm from "../../formHandler/TeacherForm/TeacherSubjectForm";

const AddNewICanTeach = () => {
  const { teacherSubject, handleChange, handleSubmit } = TeacherSubjectForm();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <>
      <div className="addnew_icanteach">
        <h3 className="right_box_heading">Add subject you can teach</h3>
        <div className="icanteach_form">
          <form onSubmit={handleFormSubmit}>
            <div className="input_box">
              <label htmlFor="">Subject</label>
              <div className="input">
                <i className="fa-solid fa-book"></i>

                <input
                  type="text"
                  name="subject"
                  value={teacherSubject.subject}
                  onChange={handleChange}
                  placeholder="Enter title here"
                />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="">Level of teaching</label>
              <div className="input">
                <select
                  id="level"
                  name="level"
                  value={teacherSubject.level}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
            <button className="submit_btn">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewICanTeach;
