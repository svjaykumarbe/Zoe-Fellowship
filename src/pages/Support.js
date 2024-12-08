import React from 'react';
import { Link } from 'react-router-dom';
import JoinUs from '../components/JoinUs';
import './Support.css'; // Import CSS for styling

const Support = () => {
  console.log("Support component rendered");

  return (
    <div className="support-container">
      <div className="support-header">
        <h2>Join Us</h2>
        <p className="support-intro">
        Together, we can make a difference! Be part of our mission to serve the community and spread love.
        </p>
      </div>

      {/* Include JoinUs module */}
      <div className="support-join">
        <JoinUs />
      </div>
    </div>
  );
};

export default Support;
