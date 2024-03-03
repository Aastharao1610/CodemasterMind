import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../Quizreuse/Timer';
import { useNavigate } from 'react-router-dom';

const QuizLayout = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleTimeLimitExceeded = () => {
    // Redirect to the /scoreboard route
    navigate('/scoreboard');
  };

  const handleTimeUpdate = (updatedTime) => {
    // Handle time update if needed
    console.log(updatedTime);
  };

  const handleSubmit = () => {
    // Handle submission logic...

    // After successful submission, update the state
    setIsSubmitted(true);

    // Redirect to the /scoreboard route
    navigate('/scoreboard');
  };

  // Log the value of isSubmitted
  console.log("isSubmitted:", isSubmitted);

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="p-4 m-10 w-4/5 border border-gray-300 bg-zinc-200">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { isSubmitted });
        })}
        {/* Add your timer component here */}
        <Timer onTimeUpdate={handleTimeUpdate} onTimeLimitExceeded={handleTimeLimitExceeded} />
        {/* Example of using isSubmitted in a button click */}
        {/* <button onClick={handleSubmit}>Submit Quiz</button> */}
      </div>
    </div>
  );
};

QuizLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuizLayout;
