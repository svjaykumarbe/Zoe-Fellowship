// src/pages/Events.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Event.css';
import communityprayer from './Images/PrayerMeeting.jpg';

const Events = () => {
  const [date, setDate] = useState(new Date());

  // Sample list of upcoming events
  const upcomingEvents = [
    { date: 'November 2, 2024', title: 'Zoe Fellowship Prayer Meeting', time: '6:00 PM' },
    { date: 'November 10, 2024', title: 'Youth Group Retreat', time: '10:00 AM' },
    { date: 'November 20, 2024', title: 'Thanksgiving Service', time: '5:00 PM' },
    { date: 'December 5, 2024', title: 'Christmas Choir Rehearsal', time: '6:00 PM' },
    { date: 'December 24, 2024', title: 'Christmas Eve Service', time: '7:00 PM' },
    { date: 'January 1, 2025', title: 'New Year’s Worship Service', time: '10:00 AM' },
  ];

  return (
    <div> <h1>SUNDAY WORSHIP SERVICE</h1>
    <div className="events-container">
      {/* Main flex container */}
      <div className="events-content">
        
        {/* Right Column: Upcoming Events */}
        <div className="right-column">
          <div className="events-list">
          <img src={communityprayer} alt="Sunday Service Event" className="event-image"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;