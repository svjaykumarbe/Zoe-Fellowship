import React from 'react';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      <header className="hero">
        <h1>Learn More About Us</h1>
      </header>

      <section className="section">
        <h2>Mission & Values</h2>
        <p>We are committed to spreading the message of love and unity.</p>
      </section>

      <section className="section">
        <h2>Beliefs</h2>
        <p>Our beliefs are rooted in biblical teachings.</p>
      </section>

      <section className="section">
        <h2>History</h2>
        <p>Founded in 1990, we have a rich history of service.</p>
      </section>

      <section className="section">
        <h2>Multiethnic Unity</h2>
        <p>We celebrate diversity and promote inclusivity.</p>
      </section>
    </div>
  );
};

export default LearnMore;