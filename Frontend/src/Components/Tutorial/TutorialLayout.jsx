// // TutorialLayout.jsx

// import React from 'react';

// const TutorialLayout = ({ children }) => {
//   return (
//     <div className="container mx-auto p-4 bg-gray-100">
//       <main className="p-4">
//         {children}
//       </main>

//     </div>
//   );
// };

// export default TutorialLayout;
import { Link } from "react-router-dom";
const TutorialLayout = ({ Content,link }) => {
  return (
    <div className={` h-max text-black bg-gray-200 mx-10 my-10 border rounded-lg  cursor-pointer `}>
    <Link t={`/Quiz/LangOpt/${link}`} ></Link>
        <p className=" px-6 py-10 items-center justify-center">{Content}</p>
      
    </div>
  );
};

export default TutorialLayout;
