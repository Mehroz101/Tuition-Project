import StudentProfileForm from "../../formHandler/StudentForm/StudentProfileForm";
import { GetStudentProfile } from "../../services/StudentServices/StudentProfileService";
import { useQuery } from "@tanstack/react-query";
const ProfileInformation = () => {
  const { studentProfile, handleChange, handleSubmit, setStudentProfile } =
    StudentProfileForm();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetStudentProfile,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {
      console.log("fetching student profile");
    },
  });

  const handleFromSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  // if (data.isLoading) return <div>Loading...</div>;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading profile. Please try again later.</p>;

  return (
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
                  value={studentProfile.fName}
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
                  value={studentProfile.lName}
                  onChange={handleChange}
                  placeholder="Your last name"
                />
              </div>
            </div>
          </div>
          <div className="combo_box">
            <div className="input_box">
              <label htmlFor="">Student of</label>
              <div className="input">
                <input
                  type="text"
                  name="class"
                  onChange={handleChange}
                  value={studentProfile.class}
                  placeholder="e.g 7th"
                />
              </div>
            </div>
            <div className="input_box">
              <label htmlFor="">City</label>
              <div className="input">
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={studentProfile.city}
                  placeholder="City name"
                />
              </div>
            </div>
          </div>
          <div className="input_box">
            <label htmlFor="">Address</label>
            <div className="input">
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={studentProfile.address}
                placeholder="e.g Chungi no 06, Multan, Pakistan"
              />
            </div>
          </div>
          <div className="input_box">
            <label htmlFor="">Contact Number</label>
            <div className="input">
              <input
                type="text"
                name="number"
                onChange={handleChange}
                value={studentProfile.number}
                placeholder="e.g 03011234543"
              />
            </div>
          </div>
          <div className="input_box">
            <label htmlFor="">School Name</label>
            <div className="input">
              <input
                type="text"
                name="schoolName"
                onChange={handleChange}
                value={studentProfile.schoolName}
                placeholder="e.g Aspire College, Mian Channu"
              />
            </div>
          </div>
          <button className="submit_btn" onClick={handleFromSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileInformation;
