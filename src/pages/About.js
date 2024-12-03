import React from 'react';
import './About.css'; // Import updated CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Our Church's History</h1>
        <p>
          Founded in 2023, our church has served as a beacon of faith and community for over a century. From humble beginnings in a small wooden chapel, our congregation has grown to become one of the most vibrant and welcoming communities in the region.
        </p>
        <p>
          Our church has always focused on spreading the message of love, hope, and faith through meaningful worship, community service, and educational programs. With ministries for children, youth, adults, and seniors, we strive to nurture spiritual growth and foster a sense of belonging for everyone who walks through our doors.
        </p>
        <p>
          Today, we continue the legacy of our founders by expanding our outreach efforts, both locally and globally, and by maintaining our commitment to being a place of worship, service, and fellowship for all people.
        </p>
      </div>

      <div className="about-content">
        {/* Our Mission */}
        <section className="about-mission">
          <h2>Our Mission</h2>
          <div className="mission-list">
            <p>
              <strong>Revive:</strong> To revive the spiritual life of the people who connect so that they go and carry the mission.
            </p>
            <p>
              <strong>Renew:</strong> Renewal of mind, spirit, and body, leading to transformed lives.
            </p>
            <p>
              <strong>Refine:</strong> As silver is refined, so will they be refined with the word of God.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Faith:</strong> We believe in the transformative power of faith in Jesus Christ.</li>
            <li><strong>Community:</strong> We are committed to fostering a community of love, support, and service.</li>
            <li><strong>Service:</strong> We believe in serving our neighbors and the world through acts of compassion and justice.</li>
            <li><strong>Worship:</strong> We are devoted to gathering together in worship, offering praise to God.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;