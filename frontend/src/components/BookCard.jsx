import React from "react";
import "../styles/BookCard.css";

const BookCard = ({ image, title, description, downloadLink }) => {
  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a
          href={downloadLink}
          target="_blank"
          download
          className="download-button"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default BookCard;
