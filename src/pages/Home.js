import React from 'react';
import './Home.css'; // Import your CSS styles

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <img src="./churchPic.jpg" alt="Church" className="hero-image" />
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