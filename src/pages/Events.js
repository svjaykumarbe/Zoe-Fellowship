import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import Calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './Event.css'; // Import custom styles for Events page

const Events = () => {
  const [date, setDate] = useState(new Date()); // State to store the selected date

  // Sample list of upcoming events
  const upcomingEvents = [
    { date: 'October 15, 2024', title: 'Community Outreach Event', time: '12:00 PM' },
    { date: 'November 1, 2024', title: 'Youth Group Retreat', time: '10:00 AM' },
    { date: 'November 20, 2024', title: 'Thanksgiving Service', time: '5:00 PM' },
    { date: 'December 5, 2024', title: 'Christmas Choir Rehearsal', time: '6:00 PM' },
    { date: 'December 24, 2024', title: 'Christmas Eve Service', time: '7:00 PM' },
    { date: 'January 1, 2025', title: 'New Year’s Worship Service', time: '10:00 AM' },
  ];

  return (
    <div className="events-container">
      <h1>Events</h1>

      {/* Calendar Section */}
      <div className="calendar-section">
        <h2>Select a Date</h2>
        <Calendar
          onChange={setDate}
          value={date}
        />
        <p className="selected-date">Selected Date: {date.toDateString()}</p>
      </div>

      {/* Upcoming Events Section with vertical scrolling */}
      <div className="upcoming-events">
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
  );
};

export default Events;