// src/pages/Events.js
import 'react-calendar/dist/Calendar.css';
import './Event.css';
import CountdownTimer from './CountdownTimer';
import communityprayer from './Images/PrayerMeeting.jpg';

const Events = () => {
  
  // Sample list of upcoming events

  return (
    <div> <h1>SATURDAY WORSHIP SERVICE</h1>
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
    <div className="countdown-container">
        <CountdownTimer targetDate="2024-12-14T18:00:00" />
      </div>
    </div>
  );
};

export default Events;