// import { Link } from "react-router-dom";
// const TutorialLayout = ({ Content,link }) => {
//   return (
//     <div className={` h-max text-black bg-gray-200 mx-10 my-10 border rounded-lg  cursor-pointer `}>
//     <Link t={`/Quiz/LangOpt/${link}`} ></Link>
//         <p className=" px-6 py-10 items-center justify-center">{Content}</p>
      
//     </div>
//   );
// };

// export default TutorialLayout;
// TutorialLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TutorialLayout = ({ Content, link, onPrevious, onNext}) => {
  return (
    <>
    <div className={`h-max text-black bg-gray-200 mx-10 my-10 border rounded-lg cursor-pointer`}>
      <Link to={`/Quiz/LangOpt/${link}`}></Link>
      <p className="px-6 py-10 items-center justify-center">{Content}</p>
    
    </div>
      <div className="flex justify-center gap-20 mx-20 py-2 px-20">
      <button  className='bg-green-400 text-lg px-10 py-4 rounded-md' onClick={onPrevious}>←Prev</button>
      <button className='bg-green-400 text-lg px-10 py-4 rounded-md' onClick={onNext}>Next→</button>
    </div>
    </>
  );
};

export default TutorialLayout;
