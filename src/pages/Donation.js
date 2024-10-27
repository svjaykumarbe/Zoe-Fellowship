// src/pages/Donation.js
import React, { useEffect, useState } from 'react';
import './Donation.css'; // Optional: Create a Donation-specific stylesheet for styling

const Donation = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency

  useEffect(() => {
    // Fetch currency data from an API (you can use any suitable currency API)
    fetch('https://open.er-api.com/v6/latest/USD')  // Example API for latest currency data
      .then((response) => response.json())
      .then((data) => {
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
      })
      .catch((error) => console.error('Error fetching currency data:', error));
  }, []);

  const handleDonateNow = (e) => {
    e.preventDefault();

    // You can add validation or additional logic here if necessary.

    // Replace this URL with your PayPal or other payment gateway URL
    const paypalUrl = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID';
    
    // Extract the donation amount
    const amount = document.getElementById('amount').value;

    // Example PayPal URL with dynamic amount parameter and currency
    const finalUrl = `${paypalUrl}&amount=${amount}&currency_code=${selectedCurrency}`;

    // Redirect to PayPal (or your payment gateway)
    window.location.href = finalUrl;
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="donation-page">
      <h1>Support Our Ministry</h1>
      <p>Your donation will be used by Zoe - International Ministries to bring God's love and hope to millions of people who are in sorrow and pain. Your reward shall be great.</p>

      <form className="donation-form" onSubmit={handleDonateNow}>
        <label htmlFor="currency">Select Currency:</label>
        <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <label htmlFor="name">Donor Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="address">Donor Address:</label>
        <input type="text" id="address" name="address" placeholder="Your Address" required />

        <label htmlFor="contact">Contact Number:</label>
        <input type="text" id="contact" name="contact" placeholder="Your Contact number" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="amount">Donation Amount ({selectedCurrency}):</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" required />

        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default Donation;