import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState(0)
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIconRotation(iconRotation + 180); // Rotate by 180 degrees on each click
  };

  

  
  return (
    <header className="sticky z-50 top-0 bg-white border-b border-green-500 px-0 lg:px-10 py-2.5">
      <div className="flex justify-between items-center mx-4 max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src="green.png" className="mr-6 h-12" alt="Logo" />
        </Link>

        <ul className="flex flex-col mt-20 font-medium  lg:flex-row lg:space-x-8 lg:mt-4">
          <NavItem to="/" label="Home" />
       
          <li >
            <span className="cursor-pointer flex items-center">
            <NavItem to="/Tutorial" label="Tutorial" />
             
              <span
              
                className={`ml-1 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                style={{ transform: `rotate(${iconRotation}deg)` }}
              >
                 <li className="relative group" onClick={toggleDropdown}>
                ▼
                </li>
              </span>
             
            </span>
            {isDropdownOpen && (
              <ul className="absolute mt-2 space-y-2 bg-white border border-gray-200 rounded-lg z-50">
              
                <li>
                  <NavLink to="/tutorial/html" className="block px-4 py-2 hover:bg-gray-100">
                   Html
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tutorial/Css" className="block px-4 py-2 hover:bg-gray-100">
                   Css
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tutorial/javaScript" className="block px-4 py-2 hover:bg-gray-100">
                  javascript
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tutorial/Cpp" className="block px-4 py-2 hover:bg-gray-100">
                  Cpp
                  </NavLink>
                </li>
                {/* Add more items as needed */}
              </ul>
            )}
          </li>

          <NavItem to="/about" label="About" />
        
          <NavItem to="/quiz" label="Quiz" />
        </ul>

        <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center space-x-4 ml-auto">
          {/* Add Search Input and Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-gray-300  bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
            <button type="submit" className="absolute right-3 top-2 cursor-pointer">
          
              {/* Add your search icon here */}
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              className='h-6 w-6 z-50'
              alt="" />
            
            </button>
          </div> 
          </div>
          <div className="relative">
            <NavLinkButton
              to="/login"
              label="login"
              className="inline-block bg-green-200 hover:bg-green-500 text-black rounded-l-full rounded-r-none px-4 py-2"
            />
            <NavLinkButton
              to="/Signup"
              label="SignUp"
              className="inline-block bg-green-500 text-white rounded-l-none rounded-r-full px-4 py-2 mr-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// ... (NavItem and NavLinkButton components remain unchanged)


const NavItem = ({ to, label }) => (
  <li className="mr-2">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-500" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
      }
    >
      {label}
    </NavLink>
  </li>
);

const NavLinkButton = ({ to, label }) => (
    <NavLink
      to={to}
      className="text-white bg-green-700 hover:bg-green-200 hover:text-black font-medium rounded-2xl mx-2 mr-1 text-sm px-8 py-4 focus:outline-none"
    >
      {label}
    </NavLink>
  );

export default Header;

