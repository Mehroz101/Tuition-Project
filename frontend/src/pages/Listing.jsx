import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "../styles/Listing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeacherCard from "../components/TeacherCard";

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

const Listing = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const { data: teacherList } = useQuery({
    queryKey: ["teacherList"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/teacherList`);
      console.log(response.data.data);
      return response.data.data;
    },
    onSuccess: (data) => {
      setTeachers(data);
    },
  });

  useEffect(() => {
    if (teacherList) {
      setTeachers(teacherList);
    }
  }, [teacherList]);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    const sortedTeachers = [...teachers].sort((a, b) => {
      if (value === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setTeachers(sortedTeachers);
  };

  const handleSearch = () => {
    let filteredTeachers = teacherList;

    if (searchQuery) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (subjectFilter) {
      filteredTeachers = filteredTeachers.filter(
        (teacher) =>
          teacher.subject.toLowerCase() === subjectFilter.toLowerCase()
      );
    }

    setTeachers(filteredTeachers);
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              {/* Add more subjects as needed */}
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>

          <div className="sort-filter">
            <label htmlFor="sort">Sort by Price:</label>
            <select id="sort" value={sortOrder} onChange={handleSort}>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* Teacher Listings */}
        <div className="teacher-listings">
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <p>No teachers found for the given search criteria.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listing;
