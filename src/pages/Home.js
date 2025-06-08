import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import './Home.css';
import reconnect from './Images/Reconnect.png';
import renew from './Images/Renew.png';
import review from './Images/review.jpeg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Parallax Effect */}
      <section className="hero parallax">
        <div className="hero-content">
          <h1 className="home-heading-module">Welcome to Zoe Fellowship – Reconnect. Renew. Revive. Refine.</h1>
          <p>Building a community of faith, love, and service.</p>
          <Link to="/learnmore" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="carousel-section">
        <h2>Experience Our Ministry</h2>
        <div className="carousel">
          <div className="carousel-slide">
            <img src="./SundayService.jpg" alt="Church Service" />
            <p>Sunday Worship Service</p>
          </div>
          <div className="carousel-slide">
            <img src="./PrayerImg.jpg" alt="Community Prayer" />
            <p>Community Prayer Gathering</p>
          </div>
          <div className="carousel-slide">
            <img src="./OutreachImage.jpg" alt="Outreach Service" />
            <p>Outreach Service Events</p>
          </div>
          <div className="carousel-slide">
            <img src="./BIBLESTUDY.jpg" alt="Bible Study" />
            <p>Weekly Bible Study</p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            <strong>"Connecting people with God, we inspire hearts to experience His presence and become His dwelling place."</strong>
          </p>
          <h2>Our Mission</h2>
          <p>
            <strong>
              "We glorify God by sharing His love, fostering relationships, and empowering faith through worship, service, and teaching, 
              creating a vibrant Fellowship of transformed lives."
            </strong>
          </p>
        </div>
      </section>

      {/* Reconnect, Renew, Revive, Refine Section */}
      <section className="reconnect-renew">
        <div className="container">
          <h2 className="section-title">Reconnect, Renew, Revive, Refine</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h3>Reconnect with God</h3>
              <img src={reconnect} alt="Reconnect with God" />
              <p>
                Rediscover the joy of a personal relationship with God through worship, prayer, and fellowship.
              </p>
            </div>
            <div className="grid-item">
              <h3>Renew Your Faith In God</h3>
              <img src={renew} alt="Renew Your Faith" />
              <p>
                Strengthen your faith and grow spiritually with dynamic teaching and life-transforming experiences.
              </p>
            </div>
            <div className="grid-item">
              <h3>Revive Your Passion to Seek God</h3>
              <img src={review} alt="Revive Your Passion" />
              <p>
                Ignite your hunger to know God more deeply and experience His presence in every area of your life.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Events Section */}
      <section className="upcoming-events stylish-section">
        <div className="container">
          <h2>Upcoming Events & Highlights</h2>
          <div className="grid-container">
            {/* YouTube Video */}
            <div className="grid-item">
              <h3>Worship Sermon Highlights</h3>
              <iframe
                className="video-frame"
                src="https://www.youtube.com/embed/fOB73qRVGJs?start=1197"
                title="Worship Sermon Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Watch highlights from our recent sermons.</p>
            </div>

            {/* Calendar Event */}
            <div className="grid-item">
              <h3>Community Prayer Gathering</h3>
              <p>
                Join us on the first Saturday of each month for a community prayer gathering. All are welcome.
              </p>
              <p><strong>Date:</strong> First Saturday of every month</p>
              <p><strong>Time:</strong> 06:00 PM - 10:00 PM</p>
              <p><strong>Location:</strong> 101 West drive, Brampton</p>
            </div>

            {/* Weekly Bible Study */}
            <div className="grid-item">
              <h3>Weekly Bible Study</h3>
              <iframe
                className="video-frame"
                src="https://www.youtube.com/embed/c_VyjZTR5VM"
                title="Weekly Bible Study"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Watch the latest sessions from our weekly Bible study series.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="countdown-container">
        <h1>Next Event Starts In</h1>
        <CountdownTimer targetDate="2025-04-17T18:00:00" />
      </section>
    </div>
  );
};

export default Home;