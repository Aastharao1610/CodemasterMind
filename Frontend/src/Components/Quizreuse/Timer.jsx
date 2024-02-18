import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeUpdate, onTimeLimitExceeded }) => {
  const timeLimit = 1 * 60; // 10 minutes in seconds
  const warningTime = 15; // 15 seconds
  const [remainingTime, setRemainingTime] = useState(timeLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        const updatedTime = Math.max(prevTime - 1, 0); // Ensure the time doesn't go negative

        // Check if the time limit is exceeded
        if (updatedTime <= 0) {
          clearInterval(interval);
          onTimeLimitExceeded(); // Trigger the callback to handle time limit exceeded
          return 0; // Set remaining time to 0
        }

        // Continue with the updated time
        onTimeUpdate(updatedTime);
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUpdate, onTimeLimitExceeded]);

  // Show a pop-up message when the time is up
  useEffect(() => {
    if (remainingTime <= 0) {
      // Use setTimeout to ensure that the pop-up is shown after the component renders
      setTimeout(() => {
        const userConfirmed = window.confirm('Time is up! ');
        if (userConfirmed) {
          // If the user clicks OK, redirect to the scoreboard
          onTimeLimitExceeded();
        }
      }, 0);
    }
  }, [remainingTime, onTimeLimitExceeded]);

  // Determine the background color based on the remaining time
  const backgroundColor = remainingTime <= warningTime ? 'red' : 'green';

  // Render the timer value with styling
  return (
    <div style={{ backgroundColor, color: 'white', padding: '5px', borderRadius: '5px', textAlign: 'right', width: '100px',position:'fixed' }}>
      Time: {formatTime(remainingTime)}
    </div>
  );
};

// Function to format time in MM:SS format
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
};

export default Timer;
