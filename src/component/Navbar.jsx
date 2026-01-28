import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <nav style={{ backgroundColor: "black", padding: "10px" }}>
       <Link to="/" style={linkStyle}>Home</Link>
       <Link to="/about" style={linkStyle}>About</Link>
       <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

export default Navbar;