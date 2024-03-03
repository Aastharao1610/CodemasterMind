import React, { useState, useEffect } from 'react';
import LangOpt from "../Quizreuse/LaguageOptions";
import SubmitButton from './Submit';

const Quiz = () => {
  // Add state for handling submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("your quiz issumbiteed is not working",isSubmitted)

  // Function to handle quiz submission
  const handleSubmission = () => {
    // Your existing submission logic...

    // After successful submission, update the state
    setIsSubmitted(true);
    console.log('Quiz submitted. isSubmitted:', isSubmitted);
  };

  // Log the state change after it's updated
  useEffect(() => {
    console.log('Quiz submitted. isSubmitted:', isSubmitted);
  }, [isSubmitted]);

  return (
    <div>
      {/* Pass handleSubmission as a prop to LangOpt */}
      <LangOpt onSubmit={handleSubmission} />
      <p>isSubmitted in Quiz: {isSubmitted.toString()}</p>
      <SubmitButton onSubmit={handleSubmission} isSubmitted={isSubmitted} />
    </div>
  );
};

export default Quiz;
// // Quiz.jsx
// // Quiz.jsx
// // Quiz.jsx
// import React from 'react';
// import LangOpt from "../Quizreuse/LaguageOptions";
// import SubmitButton from './Submit';
// import { useSubmit } from './SubmitContext'; // Import the useSubmit hook

// const Quiz = () => {
//   const { handleSubmit } = useSubmit(); // Access handleSubmit function

//   return (
//     <div>
//       {/* Pass handleSubmit as a prop to LangOpt */}
//       <LangOpt onSubmit={handleSubmit} />
//       {/* Render SubmitButton */}
//       <SubmitButton onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default Quiz;
