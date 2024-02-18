// Score.jsx
import React from 'react';

const Score = ({ selectedQuestions, selectedAnswers, timeElapsed ,isSubmitted}) => {
  // Remove the condition for !isSubmitted
  console.log('Props received in Score component:', { selectedQuestions, selectedAnswers, timeElapsed });

 

 

  if (!isSubmitted) {
    console.log('Quiz not submitted');
    return null; // Don't render the scoreboard if the quiz is not submitted
  }
  console.log('Props received in Score component:', { selectedQuestions, selectedAnswers, isSubmitted, timeElapsed });
  const calculateScore = () => {
    let correctCount = 0;
    let incorrectCount = 0;
    let notAttendedCount = 0;

    for (let i = 0; i < selectedQuestions.length; i++) {
      const correctAnswer = selectedQuestions[i].correctAnswer;
      const selectedAnswer = selectedAnswers[i];

      if (selectedAnswer === correctAnswer) {
        correctCount++;
      } else if (selectedAnswer === null) {
        notAttendedCount++;
      } else {
        incorrectCount++;
      }
    }

    const totalQuestions = selectedQuestions.length;
    const totalMarks = totalQuestions; // Assuming each question carries 1 mark
    const marksObtained = correctCount;
    const percentage = (marksObtained / totalMarks) * 100;

    return {
      correctCount,
      incorrectCount,
      notAttendedCount,
      totalQuestions,
      totalMarks,
      marksObtained,
      percentage,
    };
  };

  const {
    correctCount,
    incorrectCount,
    notAttendedCount,
    totalQuestions,
    totalMarks,
    marksObtained,
    percentage,
  } = calculateScore();
  

  return (
    <div>
      <h2>Scoreboard</h2>
      <p>Correct Answers: {correctCount}</p>
      <p>Incorrect Answers: {incorrectCount}</p>
      <p>Not Attended: {notAttendedCount}</p>
      <p>Total Questions: {totalQuestions}</p>
      <p>Total Marks: {totalMarks}</p>
      <p>Marks Obtained: {marksObtained}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <p>Time Elapsed: {timeElapsed} seconds</p>
      
    </div>
  );
};

export default Score;

