// src/pages/Events.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Event.css';

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
    <div> <h1>Events</h1>
    <div className="events-container">
      {/* Main flex container */}
      <div className="events-content">
        
        {/* Left Column: Calendar and Video */}
        <div className="left-column">
          <div className="calendar-section">
            <h2>Select a Date</h2>
            <Calendar onChange={setDate} value={date} />
            <p className="selected-date">Selected Date: {date.toDateString()}</p>
          </div>

          <div className="events-video">
            <h2>Watch Our Past Events</h2>
            
            {/* Embedded YouTube Video */}
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/dsyUPCXBy-g"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Right Column: Upcoming Events */}
        <div className="right-column">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-item">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;