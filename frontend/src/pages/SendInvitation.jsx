import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/SendInvitation.css";
import SendInvitationForm from "../formHandler/StudentForm/SendInvitationForm";
import { useParams } from "react-router-dom";
const SendInvitation = () => {
  const { sendInvitation, setSendInvitation, handleChange, handleSubmit } =
    SendInvitationForm();
  const { teacherId } = useParams();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(teacherId);
  };
  useEffect(() => {
    setSendInvitation((prev) => ({
      ...prev,
      teacherId: teacherId,
    }));
  }, []);
  return (
    <>
      <Navbar />
      <div className="invitation_form">
        <h1 className="heading">Send Invitation</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="combo_box">
            <div className="offered_price input_box">
              <label for="offered_price">Offered Price:</label>
              <div className="input">
                <i className="fa-solid fa-dollar"></i>
                <input
                  type="number"
                  name="offeredPrice"
                  value={sendInvitation.offeredPrice}
                  onChange={handleChange}
                  id="offered_price"
                />
              </div>
            </div>
            <div className="offered_price input_box">
              <label for="offered_price">Tution Type</label>
              <select
                name="tuitionType"
                value={sendInvitation.tuitionType}
                onChange={handleChange}
              >
                <option selected value="online">
                  Online
                </option>
                <option value="teacherhome">Teacher Home</option>
                <option value="studenthome">Student Home</option>
              </select>
            </div>
          </div>
          <div className="combo_box">
            <div className="timing input_box">
              <label for="from">From:</label>
              <input
                type="time"
                name="from"
                value={sendInvitation.from}
                onChange={handleChange}
                className="inputDate"
                id="from"
              />
            </div>
            <div className="timing input_box">
              <label for="to">To:</label>
              <input
                type="time"
                name="to"
                value={sendInvitation.to}
                onChange={handleChange}
                className="inputDate"
                id="to"
              />
            </div>
          </div>
          <div className="input_box subject_box">
            <label for="subject">Subject:</label>
            <div className="input">
              <i className="fa-solid fa-book"></i>
              <input
                type="text"
                name="subject"
                value={sendInvitation.subject}
                onChange={handleChange}
                id="subject"
              />
            </div>
          </div>
          <div className="input_box">
            <label htmlFor="">A brief introduction</label>
            <div className="input">
              <textarea
                name="description"
                value={sendInvitation.description}
                onChange={handleChange}
                id=""
                cols="30"
                rows="10"
                placeholder="About me"
              ></textarea>
            </div>
          </div>
          <div className="send_invitation">
            <input type="submit" value="Send invitation" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SendInvitation;
