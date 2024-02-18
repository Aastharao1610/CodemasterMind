import CodeSnippet from "../CodeSnippet/Codesnippet.jsx";
import { Link } from "react-router-dom";

const Container = ({ title, content, cardId, BackgroundColor, codeSnippet }) => {
  return (
    <div className='w-full bg-gray-100 h-full mx-auto  pt-10 mb-4 pb-10 '>
      <div className={`${BackgroundColor} m-auto px-5 w-5/6 h-3/4 border rounded-3xl pb-14 `}>
        <Link to={`/tutorial/${cardId}`}>
          {/* Use dynamic link based on cardId */}
          <h1 className='text-3xl font-semibold underline pt-10 px-12'>{title}→</h1>
        </Link>
        <div className='flex justify-between'>
          <div className='w-2/4 text-justify pt-10 px-12 list-discv list-decimal'>{content}</div>
         
          <div className=' sm:block sm:w-1/2'>
            {/* Display code snippet */}
            <CodeSnippet
            className=' '
             code={codeSnippet} />
          </div>
          
        </div>
        <Link to={`/tutorial/${cardId}`}>
          {/* Use dynamic link based on cardId */}
          <button className='bg-green-400 text-black rounded-3xl px-20 mt-0 py-3 my-5 mx-20 text-xl '>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Container;
