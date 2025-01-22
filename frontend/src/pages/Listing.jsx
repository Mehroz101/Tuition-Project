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
      return response.data.data;
    },
    onSuccess: (data) => {
      setTeachers(data);
    },
  });

  useEffect(() => {
    let filteredTeachers = teacherList || [];

    if (searchQuery) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher?.city?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (subjectFilter) {

      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.subjects.some(
          (subject) =>
            subject.subject.toLowerCase() === subjectFilter.toLowerCase()
        )
      );
    }

    if (sortOrder === "low-to-high") {
      filteredTeachers.sort((a, b) => a.fee - b.fee);
    } else {
      filteredTeachers.sort((a, b) => b.fee - a.fee);
    }

    setTeachers(filteredTeachers);
  }, [searchQuery, subjectFilter, sortOrder, teacherList]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSubjectChange = (e) => setSubjectFilter(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  return (
    <>
      <Navbar />
      <div className="teacher-listing-page">
        {/* Search and Filter Bar */}
        <div className="listing_page_top">
          <div className="search-filter-bar">
            <div className="input_box">
              <select value={subjectFilter} onChange={handleSubjectChange}>
                <option value="">Select Subject</option>
                <option value="math">Math</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                {/* Add more subjects as needed */}
              </select>
              <input
                type="text"
                placeholder="Search by city name `Multan`"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="sort-filter">
            <label htmlFor="sort">Sort by Price:</label>
            <select id="sort" value={sortOrder} onChange={handleSortChange}>
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
