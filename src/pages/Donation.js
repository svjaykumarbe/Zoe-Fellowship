// src/pages/Donation.js
import React from 'react';
import './Donation.css'; // Optional: Create a Donation-specific stylesheet for styling

const Donation = () => {
  return (
    <div className="donation-page">
      <h1>Support Our Ministry</h1>
      <p>Your generous donation helps us continue our mission of spreading faith and love.</p>

      <form className="donation-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="amount">Donation Amount (in $):</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" required />

        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default Donation;