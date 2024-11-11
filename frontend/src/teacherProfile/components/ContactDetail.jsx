import React, { useEffect, useState } from "react";

const ContactDetail = () => {
  const [contact, setContact] = useState({
    number: 3061756719,
    email: "mehrozfarooq127@gmai.com",
    whatsapp: 30489056719,
    websiteLink: "https://www.example.com",
  });
  const handleChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="personal_details">
        <h3 className="right_box_heading">Contact details</h3>
        <div className="personal_details_form">
          <form action="">
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Contact number</label>
                <div className="input">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="number"
                    name="number"
                    value={contact?.number}
                    onChange={handleChange}
                    placeholder="Your contact number"
                  />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Your email</label>
                <div className="input">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={contact?.email}
                    onChange={handleChange}
                    placeholder="Your email account"
                  />
                </div>
              </div>
            </div>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Whatsapp number</label>
                <div className="input">
                  <i className="fa-brands fa-whatsapp"></i>
                  <input
                    type="number"
                    name="whatsapp"
                    value={contact?.whatsapp}
                    onChange={handleChange}
                    placeholder="Whatsapp number"
                  />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Website link</label>
                <div className="input">
                  <i className="fa-solid fa-link"></i>
                  <input
                    type="text"
                    name="websiteLink"
                    value={contact?.websiteLink}
                    onChange={handleChange}
                    placeholder="https://"
                  />
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
