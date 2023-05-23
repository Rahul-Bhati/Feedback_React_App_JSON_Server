import React from 'react'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //  calculate avg rating
  let avg =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  // one place tak hi decimal dikhane k liye
  avg = avg.toFixed(1).replace(/[.,]0$/, ""); // regular expression ko '' nothing se replace krege

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats