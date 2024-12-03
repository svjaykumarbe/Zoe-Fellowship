import React from 'react';
import { Link } from 'react-router-dom';
import JoinUs from '../components/JoinUs';
import './Support.css'; // Import CSS for styling

const Support = () => {
  console.log("Support component rendered");

  return (
    <div className="support-container">
      <div className="support-header">
        <h2>Support Our Church</h2>
        <p className="support-intro">
          Together, we can make a difference! Your support helps us in serving the community and spreading love.
        </p>
      </div>

      <div className="support-options">
        <ul className="support-list">
          {/* Make a Donation */}
          <li>
            <Link to="/donation" className="support-link">
              <div className="support-card">
                <h3>Make a Donation</h3>
                <p>Contribute financially to our mission and community.</p>
              </div>
            </Link>
          </li>
          {/* Volunteer Your Time */}
          <li>
            <Link to="/volunteer" className="support-link">
              <div className="support-card">
                <h3>Volunteer Your Time</h3>
                <p>Be a part of our team by volunteering.</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Include JoinUs module */}
      <div className="support-join">
        <JoinUs />
      </div>
    </div>
  );
};

export default Support;
