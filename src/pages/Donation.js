// src/pages/Donation.js
import React from 'react';
import './Donation.css'; // Optional: Create a Donation-specific stylesheet for styling

const Donation = () => {

  const handleDonateNow = (e) => {
    e.preventDefault();

    // You can add validation or additional logic here if necessary.

    // Replace this URL with your PayPal or other payment gateway URL
    const paypalUrl = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID';
    
    // Extract the donation amount
    const amount = document.getElementById('amount').value;

    // Example PayPal URL with dynamic amount parameter
    const finalUrl = `${paypalUrl}&amount=${amount}`;

    // Redirect to PayPal (or your payment gateway)
    window.location.href = finalUrl;
  };

  return (
    <div className="donation-page">
      <h1>Support Our Ministry</h1>
      <p>Your generous donation helps us continue our mission of spreading faith and love.</p>

      <form className="donation-form" onSubmit={handleDonateNow}>
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