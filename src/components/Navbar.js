import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../pages/BackButton';
import './Navbar.css';
import logo from './Greenlogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <Link className="navbar-brand" to="/">
                <img src={logo} alt="Zoe International Ministries" style={{ height: '50px', width: '150px'}} /> 
            </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)} // Toggle menu on click
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ministries" onClick={() => setIsOpen(false)}>Ministries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events" onClick={() => setIsOpen(false)}>Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={() => setIsOpen(false)}>Support</Link>
            </li>
            <li><Link className="nav-link" to="/disciple">The Whole Disciple</Link></li>
          </ul>
          
          {/* Back Button at the end of the navbar links */}
          <div className="back-button-container ml-auto">
            <BackButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;