import React, { useState } from "react";

const ContactDetail = () => {
  const [checkBoxData, setCheckBoxData] = useState({
    myHome: false,
    studentHome: false,
    online: false,
  });

  // Function to handle click and toggle the checked status
  const handleDivClick = (key) => {
    setCheckBoxData((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the value of the clicked checkbox
    }));
  };
  return (
    <>
      <div className="personal_details">
        <h3 className='right_box_heading'>Contact details</h3>
        <div className="personal_details_form">
          <form action="">
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Contact number</label>
                <div className="input">
                <i class="fa-solid fa-phone"></i>
                  <input type="number" placeholder="Your contact number" />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Your email</label>
                <div className="input">
                <i class="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="Your email account" />
                </div>
              </div>
            </div>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Whatsapp number</label>
                <div className="input">
                <i class="fa-brands fa-whatsapp"></i>
                  <input type="number" placeholder="Whatsapp number" />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Website link</label>
                <div className="input">
                <i class="fa-solid fa-link"></i>
                  <input type="text" placeholder="https://" />
                </div>
              </div>
            </div>
            
            
            
            <button className="submit_btn">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
