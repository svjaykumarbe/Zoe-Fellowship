import React from 'react';

const Support = () => {
  console.log("Support component rendered"); // Debug log
  return (
    <div className="support-page">
      <h1>Support Our Church</h1>
      <p>Our church relies on the support of its congregation. Here are some ways you can help:</p>
      <ul>
        <li><a href="/donation">Make a Donation</a></li>
        <li><a href="/volunteer">Volunteer Your Time</a></li>
      </ul>
    </div>
  );
}

export default Support;