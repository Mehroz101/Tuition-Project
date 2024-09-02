import React, { useRef } from "react";
// import TeacherCard from "./TeacherCard";

const teachers = [
  {
    id: 1,
    image: {Teacher_1},
    name: "John Doe",
    address: "New York, USA",
    price: 30,
    qualification: "M.Sc. in Mathematics",
    rating: 4.5,
    profileLink: "#",
  },
  {
    id: 2,
    image: { Teacher_2 },
    name: "Jane Smith",
    address: "Los Angeles, USA",
    price: 35,
    qualification: "Ph.D. in Physics",
    rating: 4.7,
    profileLink: "#",
  },
  {
    id: 3,
    image: { Teacher_3 },
    name: "Michael Johnson",
    address: "Chicago, USA",
    price: 40,
    qualification: "B.A. in English",
    rating: 4.8,
    profileLink: "#",
  },
  {
    id: 4,
    image: { Teacher_4 },
    name: "Emily Brown",
    address: "Houston, USA",
    price: 32,
    qualification: "M.A. in History",
    rating: 4.6,
    profileLink: "#",
  },
  {
    id: 5,
    image: { Teacher_1 },
    name: "David Wilson",
    address: "Phoenix, USA",
    price: 38,
    qualification: "M.Sc. in Chemistry",
    rating: 4.9,
    profileLink: "#",
  },
  {
    id: 6,
    image: { Teacher_2 },
    name: "Sophia Martinez",
    address: "Philadelphia, USA",
    price: 28,
    qualification: "B.Sc. in Computer Science",
    rating: 4.4,
    profileLink: "#",
  },
  {
    id: 7,
    image: { Teacher_3 },
    name: "Chris Davis",
    address: "San Antonio, USA",
    price: 29,
    qualification: "M.A. in English Literature",
    rating: 4.7,
    profileLink: "#",
  },
];
const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={scrollPrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel" ref={carouselRef}>
    
      </div>
      <button className="carousel-button next-button" onClick={scrollNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
