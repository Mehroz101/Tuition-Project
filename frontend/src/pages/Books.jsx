import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import "../styles/Books.css";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksdata, setBooksData] = useState([]);
  const initialBooksData = [
    {
      image:
        "https://open.umn.edu/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzcwNSwicHVyIjoiYmxvYl9pZCJ9fQ==--a7fde398cfa52fa9a6ff2a9081f4a4b290008235/Screen%20Shot%202022-05-27%20at%2011.39.02%20AM.png",
      title: "Algebra and Trigonometry",
      description:
        "A comprehensive guide to algebra and trigonometry concepts.",
      downloadLink:
        "https://openstax.org/details/books/algebra-and-trigonometry",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1486586550i/34189798.jpg",
      title: "Computer Science Distilled",
      description:
        "A walkthrough of core computer science concepts for beginners.",
      downloadLink: "https://github.com/downloads/manuelkrupp/CSDistilled/free",
    },
    {
      image:
        "https://static-01.daraz.pk/p/90e81bdf9ae4dc970511c3d101e87105.jpg",
      title: "Pride and Prejudice by Jane Austen",
      description: "A timeless classic exploring manners and marriage.",
      downloadLink: "https://www.gutenberg.org/ebooks/1342",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472169579i/2795347.jpg",
      title: "Urdu Ki Akhri Kitab by Ibne Insha",
      description: "A humorous take on Urdu language and literature.",
      downloadLink:
        "https://www.rekhta.org/ebooks/urdu-ki-aakhri-kitab-ibn-e-insha-ebooks",
    },
    {
      image:
        "https://www.jinnahmedicalbooks.com/wp-content/uploads/2023/12/Conceptual-Physics-TWELFTH-EDITION.jpg",
      title: "Conceptual Physics",
      description: "Simplified explanations of physics concepts for students.",
      downloadLink: "https://openstax.org/details/books/college-physics",
    },
    {
      image:
        "https://open.umn.edu/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTM5LCJwdXIiOiJibG9iX2lkIn19--80249ee3b7acafc09ba85fd264228440bac347cb/9781947172517.png",
      title: "Biology 2e",
      description: "A detailed book covering various biology concepts.",
      downloadLink: "https://openstax.org/details/books/biology-2e",
    },
    {
      image:
        "https://chemistry.com.pk/wp-content/uploads/2019/01/chemistry-the-central-science-14e.jpg",
      title: "Chemistry: The Central Science",
      description: "An essential book for understanding fundamental chemistry.",
      downloadLink: "https://openstax.org/details/books/chemistry-2e",
    },
    {
      image:
        "https://www.libertybooks.com/image/cache/catalog/9780062397348-640x996.jpg?q6",
      title: "A People's History of the United States",
      description:
        "A narrative of American history from different perspectives.",
      downloadLink: "https://www.historyisaweapon.com/zinnapeopleshistory.html",
    },
    {
      image:
        "https://www.mbabookstore.com/wp-content/uploads/2021/05/Principles-of-Economics.-Mankiw-8th.png",
      title: "Principles of Economics",
      description: "A foundational text for economics students.",
      downloadLink: "https://openstax.org/details/books/principles-economics",
    },
    {
      image: "https://eloquentjavascript.net/img/cover.jpg",
      title: "Eloquent JavaScript",
      description: "A modern introduction to JavaScript programming.",
      downloadLink: "https://eloquentjavascript.net/Eloquent_JavaScript.pdf",
    },
  ];
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setFilteredBooks(initialBooksData);
    setBooksData(initialBooksData);
  }, []);
  useEffect(() => {
    const filteredBooks = booksdata.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              key={index}
              image={book.image}
              title={book.title}
              description={book.description}
              downloadLink={book.downloadLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
