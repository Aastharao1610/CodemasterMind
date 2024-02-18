import React from "react";
import { Link } from "react-router-dom";

const Grid = ({ Language, BackgroundColor, cardId }) => {
  return (
    <div className={`language-option h-40 text-black bold text-2xl cursor-pointer ${BackgroundColor}`}>
      <Link to={`/Quiz/LangOpt/${cardId}`} className="block h-full w-full">
        <h1 className="h-full flex items-center justify-center">{Language}</h1>
      </Link>
    </div>
  );
};

export default Grid;
