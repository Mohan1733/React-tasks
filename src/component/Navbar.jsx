import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex space-x-6">
        <Link 
          to="/" 
          className="text-white text-lg font-medium hover:text-blue-400 transition duration-200"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-white text-lg font-medium hover:text-blue-400 transition duration-200"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="text-white text-lg font-medium hover:text-blue-400 transition duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;