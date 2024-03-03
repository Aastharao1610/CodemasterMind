// import React from 'react';
// import Score from './Score';

// const Scoreboard = ({ selectedQuestions, selectedAnswers, timeElapsed, isSubmitted }) => {
//   console.log("isSubmitted", isSubmitted);

//   return (
//     <div className="scoreboard-page">
//       <div className="scoreboard-container w-2/3 h-1/4 bg-slate-200  border rounded-xl m-auto my-20">
//         <h1 className='text-center capitalize'>Your score</h1>
//         {/* Render the Score component regardless of isSubmitted */}
//         <Score
//           selectedQuestions={selectedQuestions}
//           selectedAnswers={selectedAnswers}
//           timeElapsed={timeElapsed}
//           isSubmitted={isSubmitted}  
//         />
//       </div>
      
//     </div>
//   );
// };

// export default Scoreboard;
// Scoreboard.jsx
import React from 'react';
import Score from './Score';

const Scoreboard = ({ selectedQuestions, selectedAnswers, timeElapsed, isSubmitted }) => {
  console.log("isSubmitted", isSubmitted ,"selectAnswer",selectedAnswers,"seleceted Questions",selectedAnswers,"time Elasped",timeElapsed);

  return (
    <div className="scoreboard-page">
      <div className="scoreboard-container w-2/3 h-1/4 bg-slate-200  border rounded-xl m-auto my-20">
        <h1 className='text-center capitalize'>Your score</h1>
        {/* Pass isSubmitted to the Score component */}
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
