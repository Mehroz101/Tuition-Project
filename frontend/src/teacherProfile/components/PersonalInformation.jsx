import React, { useEffect, useState } from "react";

const PersonalInformation = () => {
  const [info, setInfo] = useState({
    fName: "Mehroz",
    lName: "Farooq",
    tagline: "i am a passionate teacher",
    fee: 22,
    country: "Pakistan",
    city: "Multan",
    myHome: true,
    studentHome: false,
    online: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rem quis et id tempore harum iste aspernatur, adipisci nesciunt deleniti omnis nostrum sed, maiores provident accusamus architecto voluptatibus, fugiat minima?",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
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
  console.log(country.filter((count) => count === info?.country));

  // Function to handle click and toggle the checked status
  const handleDivClick = (key) => {
    // setCheckBoxData((prevState) => ({
    //   ...prevState,
    //   [key]: !prevState[key], // Toggle the value of the clicked checkbox
    // }));
    setInfo((prev)=>({
      ...prev,
      [key]:!prev[key]
    }))
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="personal_details">
        <h3 className="right_box_heading">Personal details</h3>
        <div className="personal_details_form">
          <form action="">
            <div className="combo_box">
              <div className="input_box">
                <label htmlFor="">First name</label>
                <div className="input">
                  <input
                    type="text"
                    value={info?.fName}
                    name="fName"
                    onChange={handleChange}
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
                    value={info?.lName}
                    onChange={handleChange}
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
                    value={info?.tagline}
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
                    value={info?.fee}
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
                    class="form-control"
                  >
                    <option
                      selected
                      key={country.filter((count) => count === info?.country)}
                      value={country.filter((count) => count === info?.country)}
                    >
                      {country.filter((count) => count === info?.country)}
                    </option>

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
                    value={info?.city}
                    placeholder="City name"
                  />
                </div>
              </div>
            </div>
            <div className="option">
              <span>I can teach on</span>
              <div className="combo_box">
                <div
                  onClick={() => handleDivClick("myHome")}
                  className={info?.myHome ? "checked" : ""}
                >
                  <input
                    type="checkbox"
                    name="myHome"
                    checked={info?.myHome}
                    onChange={() => handleDivClick("myHome")} // Keeps the checkbox functional
                  />
                  <label htmlFor="myHome">My home</label>
                </div>

                <div
                  onClick={() => handleDivClick("studentHome")}
                  className={info?.studentHome ? "checked" : ""}
                >
                  <input
                    type="checkbox"
                    name="studentHome"
                    checked={info?.studentHome}
                    onChange={() => handleDivClick("studentHome")} // Keeps the checkbox functional
                  />
                  <label htmlFor="studentHome">Student home</label>
                </div>

                <div
                  onClick={() => handleDivClick("online")}
                  className={info?.online ? "checked" : ""}
                >
                  <input
                    type="checkbox"
                    name="online"
                    checked={info?.online}
                    onChange={() => handleDivClick("online")} // Keeps the checkbox functional
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
                  value={info?.description}
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
