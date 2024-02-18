import React from 'react'

 
const Card = ({ Content, Image, backgroundColor, linkedInLink, Position,Border,opacity }) => {
  return (
    <div className='w-full h-full pt-2  relative pb-2  bg-gray-100'>
    <div className={`flex px-10 mx-20 w-5/6 h-full pt-20 border ${Border} ${backgroundColor} ${Position} ${opacity}`}>
        <div className="flex-1">
          <h1 className='text-lg font-normal w-5/6  text-justify pt-2'>{Content}</h1>
          {linkedInLink && (  <div className="mt-4">
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <button className="  bg-gray-100 text-black border rounded-3xl px-20 ml-5 py-3 my-5 mx-20 text-xl ">know About Me more→</button>
              </a>
            </div>
          )}
        </div>
        <img  src={Image}
          alt='image'
          className='w-56 border rounded-2xl  h-72 object-cover  mr-16 mt-4'
        />
      </div>
    </div>
  );
};

export default Card
