import React from 'react';
import './Home.css'; // Import your CSS styles

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <img src="./churchPic.jpg" alt="Church" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Church</h1>
          <p style={{ color: '#f5f5f5' }}>
          Join us in celebrating faith, community, and worship. Our doors are always open to everyone.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Our church has been a beacon of hope and love in the community for over 2 years. Founded
          in 2023, we have grown from a small congregation to a thriving community of believers
          dedicated to spreading God's word and love.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We are committed to serving God and our community through prayer, worship, and service.
          Our mission is to bring people together, provide a space for spiritual growth, and make a
          positive impact in the world through Christ's teachings.
        </p>
        <div className="mission-images">
          <img src="./EventsPic.jpg" alt="Church Event" className="mission-image" />
          <img src="./ct-events.png" alt="Church Worship" className="mission-image" />
        </div>
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
    </div>
  );
};

export default Home;