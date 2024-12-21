import React, { useState } from "react";
import "../styles/RatingPopup.css";

const RatingPopup = ({ visible, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0 || review.trim() === "") {
      alert("Please provide a rating and review!");
      return;
    }
    onSubmit({ rating, review });
    setRating(0);
    setReview("");
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Rate and Review</h2>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "selected" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="review-input"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="popup-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;
