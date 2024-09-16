import React from 'react'

const AddNewICanTeach = () => {
  return (
    <>
    <div className="addnew_icanteach">
      <h3 className="right_box_heading">Add subject you can teach</h3>
      <div className="icanteach_form">
        <form action="">
          <div className="input_box">
            <label htmlFor="">Subject</label>
            <div className="input">
              <i class="fa-solid fa-book"></i>

              <input type="text" placeholder="Enter title here" />
            </div>
          </div>
          <div className="input_box">
                <label htmlFor="">Level of teaching</label>
                <div className="input">
                <select name="" id="level" class="form-control">
                  <option value="">Beginner</option>
                  <option value="">Intermediate</option>
                  <option value="">Advanced</option>
                </select>
                </div>
              </div>
          <button className="submit_btn">Add</button>
        </form>
      </div>
    </div>

    </>
    )
}

export default AddNewICanTeach