import React, { useState , useContext , useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function SelectRating({select}) {
    const [selected , setSelected] = useState(10) ;
    
    const { FeedbackEdit } = useContext(FeedbackContext);
    useEffect(() => {
      setSelected(FeedbackEdit.item.rating)
    }, [FeedbackEdit])
    
    const handleChange = (e) => {
      // console.log(e.currentTarget.value); // typeof e.currentTarget.value ka string h 
      setSelected(+e.currentTarget.value); // string ko number m cng kene k liye + lga diya h
      select(+e.currentTarget.value);
    }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default SelectRating