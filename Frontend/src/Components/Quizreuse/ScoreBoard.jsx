// import React from 'react';
// import Score from './Score';

// // const Scoreboard = ({ selectedQuestions, selectedAnswers, timeElapsed, isSubmitted }) => {
// //   console.log("isSubmitted", isSubmitted);
// const Scoreboard = ({ selectedQuestions, selectedAnswers, timeElapsed, isSubmitted }) => {
//   console.log("isSubmitted", isSubmitted);

//   // Directly check if the necessary props are available before rendering
//   if (isSubmitted) {
//   return (
//     <div className="scoreboard-page">
//       <div className="scoreboard-container w-2/3 h-1/4 bg-slate-200 border-green-200 border rounded-xl m-auto my-20">
//         <h1 className='text-center'>Quiz Scoreboard</h1>
        
//         <Score
//           selectedQuestions={selectedQuestions}
//           selectedAnswers={selectedAnswers}
//           timeElapsed={timeElapsed}
//           isSubmitted={isSubmitted}
//         />
//       </div>
//       <h1 className=' text-black rounded-md  bg-green-200 w-full'>  ScoreBoard</h1>
//       <h2 className='bg-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perspiciatis error praesentium eveniet consectetur modi atque similique vitae placeat, expedita fuga tempore nulla, saepe, quo dignissimos nam illo sapiente distinctio.</h2>
//       </div>
//   );
// } else {
//   return null; // or render a loading state, message, or any other component if not submitted
// }
// };

// export default Scoreboard;
import React from 'react';
import Score from './Score';

const Scoreboard = ({ selectedQuestions, selectedAnswers, timeElapsed, isSubmitted }) => {
  console.log("isSubmitted", isSubmitted);

  return (
    <div className="scoreboard-page">
      <div className="scoreboard-container w-2/3 h-1/4 bg-slate-200  border rounded-xl m-auto my-20">
        <h1 className='text-center capitalize'>Your score</h1>
        {/* Render the Score component regardless of isSubmitted */}
        <Score
          selectedQuestions={selectedQuestions}
          selectedAnswers={selectedAnswers}
          timeElapsed={timeElapsed}
          isSubmitted={isSubmitted}  
        />
      </div>
      
    </div>
  );
};

export default Scoreboard;
