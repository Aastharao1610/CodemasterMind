// ReadMoreButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const ReadMoreButton = ({ link, buttonText }) => {
  return (
    <Link to={link}>
      <button >{buttonText}</button>
    </Link>
  );
};

export default ReadMoreButton;
