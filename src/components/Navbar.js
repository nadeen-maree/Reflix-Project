import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <h1 className='website-name'>REFLIX</h1>
      <nav className="navbar">
          <Link to="/"><div className="navbar-link">Home</div></Link>
          <Link to="/navbar-catalog"> <div className="navbar-link">Catalog</div></Link>
      </nav>
    </div>
    
  );
}


export default Navbar;
