import React, { useEffect, useState } from "react";
import Img from "../../assets/teacher-1.jpg";

const ReviewsPage = () => {
  const [review, setReview] = useState();
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      img:Img,
      message: "This service exceeded my expectations! Highly recommended.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      img:Img,
      message: "Great experience overall, just a few minor issues.",
    },
    {
      name: "Alex Johnson",
      rating: 3,
      img:Img,
      message: "It was okay, but there’s definitely room for improvement.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      img:Img,
      message: "Amazing! Will definitely use this again.",
    },
    {
      name: "Michael Brown",
      rating: 2,
      img:Img,
      message:
        "Not very satisfied with the service. Needs a lot of improvement.",
    },
    {
      name: "Sarah Wilson",
      rating: 4,
      img:Img,
      message: "Good, but could be better with some tweaks.",
    },
    {
      name: "David Miller",
      rating: 1,
      img:Img,
      message: "Very disappointing. Would not recommend.",
    },
    {
      name: "Jessica Garcia",
      rating: 3,
      img:Img,
      message: "The service was average, but nothing special.",
    },
    {
      name: "Chris Martinez",
      rating: 4,
      img:Img,
      message: "Pretty good overall, I’ll use it again.",
    },
    {
      name: "Laura Lee",
      rating: 5,
      img:Img,
      message:
        "Absolutely loved it! Fantastic experience from start to finish.",
    },
  ];

  useEffect(() => {
    setReview(reviews);
    console.log(reviews);
  }, []);
  return (
    <>
      <div className="reviews_page">
        <div className="review_box">
          <h2 className="review_box_heading">Reviews ({review?.length})</h2>
          <div
            className="review_section"
            style={{
              maxHeight: "650px",
              overflow: "scroll",
              borderTop: "2px dashed #ddd",
            }}
          >
            {review?.map((rev) => (
              <div className="review">
                <div className="review_box_left">
                  <img src={rev?.img} alt="" />
                </div>
                <div className="review_box_right">
                  <div className="review_box_right_top">
                    <span className="name">{rev?.name}</span>
                    <span className="rating">
                      {rev?.rating}.0
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="review_box_right_bottom">
                    <span>
                     {rev?.message}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
