import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback() 
  }, [])
  // Fetch Feedback from json (backend)
  const fetchFeedback = async () => {
    const response = await fetch(
      `/feedback?_sort=id&_order=desc`
    ) 
    const data = await response.json()
    console.log(data)
    setfeedback(data)
    setIsLoading(false)
  }

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch( `/feedback/${id}`,{ method : 'DELETE' })
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method : "post" ,
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(newFeedback) ,
    })
    const data = await response.json() 
    setfeedback([data, ...feedback]);
  };

  // Edit Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
     // console.log(FeedbackEdit);
  };

  // Update Feedback item
  const updateFeedback = async (id, updItem) => {
    // console.log(id, updItem);
    const response = await fetch(`/feedback/${id}`,{
      method : 'PUT' ,
      headers : {
        'Content-type' : 'application/json' 
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({
      item : {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        FeedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

