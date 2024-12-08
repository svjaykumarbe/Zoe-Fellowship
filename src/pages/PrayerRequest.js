import React from 'react';
import './PrayerRequest.css';

const PrayerRequest = () => {
  return (
    <div className="prayer-request-page">
      <div className="prayer-request-header">
        <h1>Share Your Prayer Request</h1>
        <p>Your prayer is important to us. Let us stand with you in faith.</p>
      </div>

      <div className="prayer-request-form-container">
        <form className="prayer-request-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="prayer-request">Your Prayer Request</label>
            <textarea
              id="prayer-request"
              rows="5"
              placeholder="Write your prayer request here..."
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Submit Prayer Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrayerRequest;