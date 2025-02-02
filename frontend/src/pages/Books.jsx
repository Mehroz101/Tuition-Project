import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import "../styles/Books.css";
import { GetBooksData } from "../services/StudentServices/StudentProfileService";
import {  useQuery } from "@tanstack/react-query";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksdata, setBooksData] = useState([]);
  const {data:BookData} = useQuery({
      queryKey:["booksdata"],
      queryFn:GetBooksData
     })
      useEffect(() => {
        if (BookData) {
          console.log(BookData.data);
          setBooksData(BookData.data);
          setFilteredBooks(BookData.data)
        }
      }, [BookData]); // eslint-disable-line react-hooks/exhaustive-deps
    

  const handleChange = (e) => {
    const lettersRegex =/^[A-Za-z\s]*$/; // Only letters
      if (lettersRegex.test(e.target.value) || e.target.value === '') {
        // setFindParking((prevState) => ({
        //     ...prevState,
        //     [e.target.name]: e.target.value,
        // }));
        setSearchTerm(e.target.value);
    }
    
  };

  useEffect(() => {
    const filteredBooks = booksdata.filter((book) =>
      book.BookName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
  }, [searchTerm, booksdata]);
  return (
    <>
      <Navbar />
      <div className="bookspage">
        <div className="top">
          <h1>Books</h1>
          <div className="searchinput">
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="books">
          {filteredBooks?.map((book, index) => (
            <BookCard
              key={book.BookID}
              image={book.ImgUrl}
              title={book.BookName}
              description={book.BookDesc}
              downloadLink={book.BookUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
