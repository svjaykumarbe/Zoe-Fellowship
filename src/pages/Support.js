import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import JoinUs from '../components/JoinUs';

const Support = () => {
  console.log("Support component rendered"); // Debug log

  return (
    <div className="support-page">
      <h1>Support Our Church</h1>
      <p>Our church relies on the support of its congregation. Here are some ways you can help:</p>
      <ul>
        <li>
          <Link to="/donation">Make a Donation</Link> {/* Use Link for routing */}
        </li>
        <li>
          <Link to="/volunteer">Volunteer Your Time</Link> {/* Use Link for routing */}
        </li>
      </ul>
      {/* Add JoinUs module here */}
      <JoinUs />
    </div>
  );
}

export default Support;