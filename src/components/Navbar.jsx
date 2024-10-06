import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black shadow-lg ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Company Name */}
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-2xl font-bold text-white ">Portfolio</h1>
            </div>
          </div>

          {/* Menu Items */}
          <div className="items-center space-x-4 md:flex hidden">
            <Link
              to="home"
              className="px-2 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            >
              Home
            </Link>
            <Link
              to="about"
              className="px-2 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            >
              About
            </Link>
            <Link
              to="project"
              className="px-2 py-1 font-semibold text-white rounded-md cursor-pointer hover:bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            >
              Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link to="home" className="text-white ">
              Home
            </Link>
            <Link to="about" className="text-white ">
              About
            </Link>
            <Link to="project" className="text-white ">
              Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
