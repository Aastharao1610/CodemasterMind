// import React, { useState } from 'react';
// import LangOpt from "../Quizreuse/LaguageOptions";
// import SubmitButton from './Submit';

// const Quiz = () => {
//   // Add state for handling submission status
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Function to handle quiz submission
//   const handleSubmission = () => {
//     // Your existing submission logic...

//     // After successful submission, update the state
//     setIsSubmitted(true);
//     console.log('Quiz submitted. isSubmitted:', isSubmitted);
//   };

//   return (
//     <div>
//       {/* Pass handleSubmission as a prop to LangOpt */}
//       <LangOpt onSubmit={handleSubmission} />
//       <p>isSubmitted in Quiz: {isSubmitted.toString()}</p>
//        <SubmitButton onSubmit={handleSubmission} isSubmitted={isSubmitted} />
//     </div>
//   );
// };

// export default Quiz;
import React, { useState, useEffect } from 'react';
import LangOpt from "../Quizreuse/LaguageOptions";
import SubmitButton from './Submit';

const Quiz = () => {
  // Add state for handling submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

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
