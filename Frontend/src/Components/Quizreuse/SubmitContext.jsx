// SubmitContext.js
import React, { createContext, useState, useContext } from 'react';

const SubmitContext = createContext();

export const SubmitProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Your submission logic...
    setIsSubmitted(true);
  };

  return (
    <SubmitContext.Provider value={{ isSubmitted, handleSubmit }}>
      {children}
    </SubmitContext.Provider>
  );
};

export const useSubmit = () => useContext(SubmitContext); // Export the useSubmit hook
