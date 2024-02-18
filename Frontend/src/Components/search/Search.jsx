import React, { useState } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform the search logic here
    // You can use the 'searchQuery' state to fetch data or update UI based on the search query
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="relative mr-3">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="button" onClick={handleSearch} className="absolute right-3 top-2 cursor-pointer">
        🔍
      </button>
    </div>
  );
}

export default Search;

