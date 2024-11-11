import React, { useState } from "react";
import "../styles/Listing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeacherCard from "../components/TeacherCard";

const Listing = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "John Doe",
      subject: "Math",
      price: 30,
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "Physics",
      price: 25,
      rating: 4.2,
      image: "https://via.placeholder.com/150",
    },
    // Add more teacher data as needed
  ]);

  const handleSearch = () => {
    // Handle search/filter logic
  };

  const handleSort = (e) => {
    const sortedTeachers = [...teachers].sort((a, b) => {
      if (e.target.value === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setTeachers(sortedTeachers);
  };

  return (
    <>
      <Navbar />
      <div className="teacher-listing-page">
        {/* Search and Filter Bar */}
        <div className="listing_page_top">
          <div className="search-filter-bar">
           <div className="input_box">
           <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search by city name `Multan`"
            />
           </div>
            <select>
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              {/* Add more categories */}
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>

          <div className="sort-filter">
            <label htmlFor="sort">Sort by Price:</label>
            <select id="sort" onChange={handleSort}>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* Teacher Listings */}
        <div className="teacher-listings">
         <TeacherCard/>
         <TeacherCard/>
         <TeacherCard/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listing;
