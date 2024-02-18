// import { Link  } from 'react-router-dom';

// const HtmlDifficulty = ({ isSubmitted }) => {
//   console.log('isSubmitted in HtmlDifficulty:', isSubmitted);
 
 
//  console.log('Html Difficulty');
 
//   return (
//     <div className="h-screen mt-10">
//       <h1 className='text-black text-center font-semibold capitalize bold text-xl mb-20'>Select Difficulty Level</h1>
//       <div className="grid ml-20 mr-20 text-2xl bold grid-cols-2 gap-20">
       
//         <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-green-200'>
//         <Link to="/Quiz/LangOpt/HtmlDifficulty/HtmlEasy">Easy</Link>
//         </li>
//         <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-pink-300'>
//           <Link to="HtmlIntermediate">Intermediate</Link>
//         </li>
//         <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-blue-200'>
//           <Link to="HtmlHard">Hard</Link>
//         </li>
//         <li className='h-40 px-60 py-12 whitespace-nowrap text-black  list-none cursor-pointer bg-gray-600'>
//           <Link to="HtmlInterview">Interview Questions</Link>
//         </li>
        
//       </div>
//     </div>
//   );
// };

// export default HtmlDifficulty;
import { Link } from 'react-router-dom';

const HtmlDifficulty = ({ isSubmitted }) => {
  console.log('isSubmitted in HtmlDifficulty:', isSubmitted);

  return (
    <div className="h-screen mt-10">
      <h1 className='text-black text-center font-semibold capitalize bold text-xl mb-20'>Select Difficulty Level</h1>
      <div className="grid ml-20 mr-20 text-2xl bold grid-cols-2 gap-20">
        <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-green-200'>
          <Link to="/Quiz/LangOpt/HtmlDifficulty/HtmlEasy">Easy</Link>
        </li>
        <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-pink-300'>
          <Link to="HtmlIntermediate">Intermediate</Link>
        </li>
        <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-blue-200'>
          <Link to="HtmlHard">Hard</Link>
        </li>
        <li className='h-40 px-60 py-12 whitespace-nowrap text-black list-none cursor-pointer bg-gray-600'>
          <Link to="HtmlInterview">Interview Questions</Link>
        </li>
      </div>
    </div>
  );
};

export default HtmlDifficulty;
