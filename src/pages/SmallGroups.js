// SmallGroups.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SmallGroups.css';

const SmallGroups = () => {
  return (
    <div className="small-groups">
      <section className="header-section">
        <h1>Connect Through Small Groups</h1>
        <p>Experience community, discipleship, and mission in a supportive environment.</p>
      </section>

      <section className="about-section">
        <h2>Why Join a Small Group?</h2>
        <p>Small groups are the heart of community at our church, where people grow in faith and relationships.</p>
      </section>

      <section className="rhythms-section">
        <h2>Our Rhythms</h2>
        <div className="rhythms">
          <div className="rhythm">
            <h3>Bible Study</h3>
            <p>Deepen your understanding of the Bible in a small, interactive group.</p>
          </div>
          <div className="rhythm">
            <h3>Family Time</h3>
            <p>Share life and build lasting friendships within the group.</p>
          </div>
          <div className="rhythm">
            <h3>Discipleship Groups</h3>
            <p>Meet in smaller groups to encourage accountability and growth.</p>
          </div>
          <div className="rhythm">
            <h3>Missional Hangouts</h3>
            <p>Engage with the community through service and outreach activities.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Join?</h2>
        <p>Find a small group that fits your schedule and life stage.</p>
        <Link to="/groups" className="btn">Explore Groups</Link>
      </section>
    </div>
  );
};

export default SmallGroups;