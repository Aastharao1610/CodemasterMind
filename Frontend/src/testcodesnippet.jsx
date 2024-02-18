// TestCodeSnippet.jsx
import React from 'react';
import CodeSnippet from '../CodeSnippet/Codesnippet.jsx';

const TestCodeSnippet = () => {
  const testCode = `console.log('Hello, world!');`;
 
  return (
    <div>
      <CodeSnippet code={testCode} />
    </div>
  );
};

export default TestCodeSnippet;
