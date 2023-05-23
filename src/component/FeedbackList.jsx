import {motion, AnimatePresence} from 'framer-motion' ;
import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback , isLoading } = useContext(FeedbackContext) ;
  // props na destructuring krege
  if (!isLoading && (!feedback || feedback.length === 0)) return <div>No Feedback Yet.</div>;
  return isLoading ? <Spinner/> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {" "}
            {/* motion.div list ki trah h esliye key likhege */}
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default FeedbackList ;