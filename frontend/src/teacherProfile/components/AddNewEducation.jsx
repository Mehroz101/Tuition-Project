import React from "react";

const AddNewEducation = () => {
  return (
    <>
      <div className="add_new_education">
        <h3 className="right_box_heading">Add/Edit education</h3>
        <div className="education_form">
          <form action="">
            <div className="input_box">
              <label htmlFor="">Degree/course title</label>
              <div className="input">
                <i class="fa-solid fa-graduation-cap"></i>
                <input type="text" placeholder="Enter title here" />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="">University/Institute title</label>
              <div className="input">
                <i class="fa-solid fa-school"></i>
                <input type="text" placeholder="Enter title here" />
              </div>
            </div>
            <div className="combo_box date">
              <label htmlFor="">Start & end date</label>
              <div className="input_box input_date_box">
                <div className="input">
                  <input type="date" />
                </div>
                <div className="input">
                  <input type="date" />
                </div>
              </div>
              <div className="input_box"></div>
            </div>
            <div className="input_box">
              <label htmlFor="">Description</label>
              <div className="input">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>

            <button className="submit_btn">Add / Edit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewEducation;
