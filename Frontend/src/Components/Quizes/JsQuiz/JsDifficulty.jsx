
import { Link } from 'react-router-dom';

function JsDifficulty() {
   return (
      <div className="h-screen mt-10">
        <h1 className='text-black text-center font-semibold capitalize bold text-xl mb-20'>Select Difficulty Level</h1>
        <div className="grid ml-20 mr-20 text-2xl bold grid-cols-2 gap-20">
         
          <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-green-200'>
            <Link to="JsEasy">Easy</Link>
          </li>
          <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-pink-300'>
            <Link to="JsIntermediate">Intermediate</Link>
          </li>
          <li className='h-40 px-60 py-12 text-black cursor-pointer list-none bg-blue-200'>
            <Link to="JsHard">Hard</Link>
          </li>
          <li className='h-40 px-60 py-12 whitespace-nowrap text-black  list-none cursor-pointer bg-gray-600'>
            <Link to="JsInterview">Interview Questions</Link>
          </li>
          
        </div>
      </div>
    );
}

export default JsDifficulty
