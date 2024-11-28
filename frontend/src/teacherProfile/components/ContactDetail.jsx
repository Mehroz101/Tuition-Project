import React, { useEffect, useState } from "react";
import TeacherContactForm from "../../formHandler/TeacherForm/TeacherContactForm";
import { pushNotify } from "../../errorHandler/Notify";
import { useQuery } from "@tanstack/react-query";
import { GetContactDetail } from "../../services/TeacherServices/TeacherContactService";

const ContactDetail = () => {
  const { teacherContact, handleSubmit, handleChange, setTeacherContact } =
    TeacherContactForm();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetContactDetail,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {
      console.log("fetching student profile");
    },
  });

  useEffect(() => {
    if (data) {
      setTeacherContact({
        number: data.number || "",
        email: data.email || "",
        whatsapp: data.whatsapp || "",
        website: data.website || "",
      });
    }
  }, [data, setTeacherContact]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <>
      <div className="personal_details">
        <h3 className="right_box_heading">Contact details</h3>
        <div className="personal_details_form">
          <form onSubmit={handleFormSubmit}>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Contact number</label>
                <div className="input">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    type="number"
                    name="number"
                    value={teacherContact?.number}
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
                    value={teacherContact?.email}
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
                    value={teacherContact?.whatsapp}
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
                    name="website"
                    value={teacherContact?.website}
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
