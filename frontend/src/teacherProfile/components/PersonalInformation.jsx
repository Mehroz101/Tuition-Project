import React, { useEffect, useState } from "react";
import TeacherProfileForm from "../../formHandler/TeacherForm/TeacherProfileForm";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfile } from "../../services/TeacherServices/TeacherProfileService";

const PersonalInformation = () => {
  const { teacherProfile, setTeacherProfile, handleChange, handleSubmit } =
    TeacherProfileForm();

  const country = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of The",
    "Cook Islands",
    "Costa Rica",
    "Cote D'ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and The Grenadines",
    "Samoa",
  ];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetTeacherProfile,
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
      setTeacherProfile({
        fName: data.fName || "",
        lName: data.lName || "",
        tagline: data.tagline || "",
        fee: data.fee || 0,
        country: data.country || "",
        city: data.city || "",
        studentHome: data.studentHome || false,
        teacherHome: data.teacherHome || false,
        online: data.online || false,
        description: data.description || "",
      });
    }
  }, [data, setTeacherProfile]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <>
      <div className="personal_details">
        <h3 className="right_box_heading">Personal details</h3>
        <div className="personal_details_form">
          <form onSubmit={handleFormSubmit}>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">First name</label>
                <div className="input">
                  <input
                    type="text"
                    name="fName"
                    onChange={handleChange}
                    value={teacherProfile.fName}
                    placeholder="Your first name"
                  />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Last name</label>
                <div className="input">
                  <input
                    type="text"
                    name="lName"
                    onChange={handleChange}
                    value={teacherProfile.lName}
                    placeholder="Your last name"
                  />
                </div>
              </div>
            </div>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Your tagline</label>
                <div className="input">
                  <input
                    type="text"
                    name="tagline"
                    onChange={handleChange}
                    value={teacherProfile.tagline}
                    placeholder="Your tagline"
                  />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">Hourly fee</label>
                <div className="input">
                  <input
                    type="number"
                    name="fee"
                    onChange={handleChange}
                    value={teacherProfile.fee}
                    placeholder="Your hourly fee in $"
                  />
                </div>
              </div>
            </div>
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">Country</label>
                <div className="input">
                  <select
                    id="country"
                    name="country"
                    onChange={handleChange}
                    value={teacherProfile.country}
                    className="form-control"
                  >
                    {/* <option
                      selected
                      key={country.filter((count) => count === teacherProfile.country)}
                      value={country.filter((count) => count === teacherProfile.country)}
                    >
                      {country.filter((count) => count === teacherProfile.country)}
                    </option> */}

                    {country?.map((count, index) => (
                      <option key={index} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="">City</label>
                <div className="input">
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={teacherProfile.city}
                    placeholder="City name"
                  />
                </div>
              </div>
            </div>
            <div className="option">
              <span>I can teach on</span>
              <div className="combo_box">
                <div>
                  <input
                    type="checkbox"
                    name="teacherHome"
                    checked={teacherProfile.teacherHome}
                    onChange={handleChange}
                  />
                  <label htmlFor="teacherHome">My home</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="studentHome"
                    checked={teacherProfile.studentHome}
                    onChange={handleChange}
                  />
                  <label htmlFor="studentHome">Student home</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="online"
                    checked={teacherProfile.online}
                    onChange={handleChange}
                  />
                  <label htmlFor="online">Online</label>
                </div>
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="">A brief introduction</label>
              <div className="input">
                <textarea
                  name="description"
                  onChange={handleChange}
                  id=""
                  cols="30"
                  rows="10"
                  value={teacherProfile.description}
                  placeholder="About me"
                ></textarea>
              </div>
            </div>
            <button className="submit_btn">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
