import React from 'react';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
          <h1>Learn More About Us</h1>
          <p className="hero-description">
            Discover our mission, beliefs, and the heart of our community.
          </p>
        </div>
      </header>

      {/* Main Content Sections */}
      <section className="section">
        <div className="section-card">
          <h2>Mission & Values</h2>
          <p>We are committed to spreading the message of love, faith, and unity to all people, inspiring change and transformation.</p>
        </div>
        <div className="section-card">
          <h2>Beliefs</h2>
          <p>Our beliefs are rooted in biblical teachings, guiding us to live a life of integrity, compassion, and service.</p>
        </div>
        <div className="section-card">
          <h2>History</h2>
          <p>Founded in 1990, we have a rich history of service to the community and spreading hope and love through our faith.</p>
        </div>
        <div className="section-card">
          <h2>Multiethnic Unity</h2>
          <p>We celebrate diversity and promote inclusivity, creating a space where all people can experience God's love regardless of background.</p>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;