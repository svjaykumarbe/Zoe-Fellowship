// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS styles
import TodaysPromise from '../components/TodaysPromise';

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = [
    './churchPic.jpg',
    './ct-events.png',
    './EventsPic.jpg',
    './Falltrip.jpg',
    './Games.jpg'
  ];

  // Toggle form visibility
  const toggleForm = () => setFormVisible(!isFormVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the prayer request (e.g., API call)
    alert('Prayer request sent!');
    setFormVisible(false);
  };

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 10000 ms = 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="home-container">
      <section className="hero-section">
        <img src={images[currentImageIndex]} alt="Church" className="hero-image" />
        <div className="hero-text">
          <h1>Zoe International Ministries</h1>
          <p style={{ color: '#f5f5f5' }}>
            Connecting people with God, we inspire hearts to experience His presence and become His dwelling place.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          "We glorify God by sharing His love, fostering relationships, and empowering faith through worship, service, and teaching, creating a vibrant Fellowship of transformed lives."
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p className="mission-text">
          <strong>Revive:</strong> To revive the spiritual life of the people who connect so that they go and carry the mission.
        </p>
        <p className="mission-text">
          <strong>Renew:</strong> Renew of mind, spirit, and body, transformed lives.
        </p>
        <p className="mission-text">
          <strong>Refine:</strong> As silver is refined, so will they be refined with the word of God.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Established in 2023 by Pastor Daniel Shetty, our church began as a small gathering of believers
          in a modest chapel. Over the years, we have expanded our facilities, outreach programs,
          and our congregation, all while maintaining our core values of faith, love, and service.
        </p>
        <p>
          Today, our church stands as a pillar in the community, offering support, guidance, and a
          place of worship for everyone. From our humble beginnings to our present, we have always
          strived to be a welcoming and inclusive place for all who seek spiritual growth and
          fellowship.
        </p>
      </section>

      {/* Prayer Request Module */}
      <section className="prayer-request-section">
        <h2>Prayer Requests</h2>
        <p>Submit your prayer requests below, and our community will pray for you.</p>

        {/* Scrollable list of past requests */}
        <div className="scrollable-requests">
          <p>Pray for my health and Family</p>
          <button onClick={toggleForm}>Request Prayer</button>
        </div>

        {/* Form for new prayer request */}
        {isFormVisible && (
          <form className="prayer-request-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="prayer-request">Prayer Request:</label>
            <textarea id="prayer-request" name="prayer-request" required></textarea>

            <button type="submit">Send Request</button>
          </form>
        )}
      </section>

      <TodaysPromise />
    </div>
  );
};

export default Home;