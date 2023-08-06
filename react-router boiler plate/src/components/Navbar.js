import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Hiking Trails</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/trails" className="nav-link">Trails</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">Add Trail</Link>
            </li>
            {/* You can add more links to other pages here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
