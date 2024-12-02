import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import './Home.css';



const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Zoe International Ministries</h1>
          <p>Join us as we build a community of faith, love, and service.</p>
          <Link to="/learnmore" className="btn btn-primary">Learn More</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Our mission is to inspire and transform lives by spreading the message of hope and love. We are dedicated to creating a welcoming space for everyone to grow spiritually and connect with others.
          </p>
          <Link to="/about" className="btn btn-secondary">About Our Church</Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events stylish-section">
        <div className="container">
          <h2>Upcoming Events & Highlights</h2>
          <div className="grid-container">
            {/* YouTube Video */}
            <div className="grid-item light-blue">
              <h3>Sunday Sermon Highlights</h3>
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/sampleVideoId" 
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>Watch highlights from our recent sermons.</p>
            </div>

            {/* Calendar Event */}
            <div className="grid-item light-green">
              <h3>Community Prayer Gathering</h3>
              <p>Join us on the first Saturday of each month for a community prayer gathering. All are welcome.</p>
              <p><strong>Date:</strong> First Saturday of every month</p>
              <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
              <p><strong>Location:</strong> Main Hall, Zoe Church</p>
            </div>

            {/* Another YouTube Video */}
            <div className="grid-item light-orange">
              <h3>Weekly Bible Study</h3>
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/anotherSampleVideoId" 
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              <p>Watch the latest sessions from our weekly Bible study series.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="countdown-container">
        <CountdownTimer targetDate="2024-12-14T18:00:00" />
      </div>
    </div>
  );
};

export default Home;