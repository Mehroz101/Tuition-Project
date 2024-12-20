import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import "../styles/Books.css";

const Books = () => {
  const sampleData = {
    image: "https://via.placeholder.com/300x200",
    title: "Sample File",
    description: "This is a description of the file you can download.",
    downloadLink: "https://example.com/sample-file.zip",
  };

  return (
    <>
      <Navbar />
      <div className="bookspage">
        <h1>Books</h1>
        <div className="books">
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
          <BookCard
            image={sampleData.image}
            title={sampleData.title}
            description={sampleData.description}
            downloadLink={sampleData.downloadLink}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
