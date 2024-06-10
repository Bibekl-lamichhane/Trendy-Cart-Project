// components/RatingStars.jsx
import React from "react";
import ReactStars from "react-stars";

const RatingStars = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"#ffd700"}
    />
  );
};

export default RatingStars;
