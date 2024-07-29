import React from 'react';

const Card = ({ Content, Image, backgroundColor, linkedInLink, Position, Border, opacity }) => {
  return (
    <div className='w-full h-full pt-2 relative pb-2 bg-gray-100'>
      <div className={`flex flex-col md:flex-row px-4 md:px-10 mx-2 md:mx-20 w-full md:w-5/6 h-full pt-10 md:pt-20 border ${Border} ${backgroundColor} ${Position} ${opacity}`}>
        <div className="flex-1 mb-6 md:mb-0">
          <h1 className='text-sm md:text-lg font-medium w-full md:w-5/6 text-justify pt-2'>{Content}</h1>
          {linkedInLink && (
            <div className="mt-4">
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-100 text-black border border-gray-400 rounded-full px-6 md:px-8 py-2 md:py-3 my-3 mx-2 md:mx-20 text-xs md:text-sm shadow-md hover:bg-gray-200 transition duration-300">Know More About Me →</button>
              </a>
            </div>
          )}
        </div>
        <img
          src={Image}
          alt='image'
          className={`w-full md:w-56 border  md:rounded-2xl h-52 md:h-72 object-cover mx-auto md:mr-16 mt-4 shadow-md ${window.innerWidth <= 768 ? 'rounded-full' : ''}`}
        />
      </div>
    </div>
  );
};

export default Card;

