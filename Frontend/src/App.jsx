// App.js
import React from 'react';
import { SubmitProvider } from './SubmitContext';
import Quiz from './Quiz';

const App = () => {
  return (
    <SubmitProvider>
      <Quiz />
    </SubmitProvider>
  );
};

export default App;
