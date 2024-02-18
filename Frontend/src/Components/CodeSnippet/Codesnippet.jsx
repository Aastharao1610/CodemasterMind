// import React from 'react'


//   const CodeSnippet = ({ code }) => {
//     return (
//       <div className="w-1/4">
//         <div className="bg-gray-500 w-full flex p-5 my-5">
//           <div className="bg-gray-100 text-base w-full ">
//           <pre>
//             <code className="language-javascript">{code}</code>
//           </pre>
//           </div>
//           </div>
//         </div>
      
//     );
//   };

// export default CodeSnippet;
import React from 'react';

const CodeSnippet = ({ code }) => {
  return (
    <div className="w-3/4 sm: ">
      <div className="bg-gray-500 w-full mx-24 rounded p-5 my-5   ">
        <div className="bg-white text-base px-3 py-2 text-blue-300 overflow-scroll w-full rounded">
          <pre>
            <code className="language">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
