import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect } from "react";
import Button from './shared/Button';
import SelectRating from './SelectRating';
import FeedbackContext from "../context/FeedbackContext";

function Feedbackform() {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if(FeedbackEdit.edit === true){
      setbtnDisabled(false) 
      setText(FeedbackEdit.item.text) 
      setRating(FeedbackEdit.item.rating)
    }
  },[FeedbackEdit])

  const handleTextChange = (e) => {
    // normal form validation
    if (text === "") {
      setbtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMsg("Text must be at least 10 characters");
    } else {
      setbtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      // console.log(newFeedback)
      if(FeedbackEdit.edit === true){
        updateFeedback(FeedbackEdit.item.id , newFeedback)
      }else{ 
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <SelectRating select={(rating) => setRating(rating)} />
        {/* {@todo rating set componet} */}
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default Feedbackform