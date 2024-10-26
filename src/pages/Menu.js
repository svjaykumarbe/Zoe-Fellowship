import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import global styles

const Menu = () => {
  return (
    <div className="menu">
      <Link className="navbar-brand" to="/">Zoe Fellowship</Link>
      <Link to="/about">About Us</Link>
      <Link to="/ministries">Ministries</Link>
      <Link to="/events">Events</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/support">Support</Link>
    </div>
  );
}

export default Menu;