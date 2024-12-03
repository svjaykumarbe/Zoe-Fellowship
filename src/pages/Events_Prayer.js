import 'react-calendar/dist/Calendar.css';
import './Event.css';
import Calendar from 'react-calendar'; // Import react-calendar for the calendar

const EventPrayer = () => {
  const events = [
    { date: '2024-12-01', name: 'Community Prayer Meeting', description: 'Join us for a time of prayer and worship.' },
    { date: '2024-12-05', name: 'Bible Study Group', description: 'An evening of studying the Word together.' },
    { date: '2024-12-14', name: 'Saturday Worship Service', description: 'A powerful time of worship and prayer.' },
    { date: '2024-12-20', name: 'Christmas Celebration', description: 'Celebrate the birth of Christ with us.' },
  ];

  // Filter out past events, keeping only future events
  const upcomingEvents = events.filter(event => new Date(event.date) > new Date());

  return (
    <div>
      {/* Header Section */}
      <div className="events-header">
        <h1>Upcoming Worship Service</h1>
        <p>Join us for inspiring worship and prayer events at Zoe International Ministries.</p>
      </div>

      {/* Main Content Container */}
      <div className="events-container">
        <div className="events-content">
          
          {/* Left Column: Calendar */}
          <div className="left-column">
            <div className="calendar-section">
              <Calendar />
              <h3>Upcoming Events:</h3>
              <div className="upcoming-events-list">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="event-item">
                    <h4>{event.name}</h4>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Event Image & Highlights */}
          <div className="right-column">
            {/* Events Highlights Section */}
            <section className="upcoming-events stylish-section">
              <div className="container">
                <h2>Events & Highlights</h2>
                <div className="grid-container">
                  {/* Video Highlights */}
                  <div className="grid-item">
                    <h3>Sunday Sermon Highlights</h3>
                    <iframe
                      className="video-frame"
                      src="https://www.youtube.com/embed/sampleVideoId"
                      title="Sunday Sermon Highlights"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p>Watch highlights from our recent sermons.</p>
                  </div>

                  <div className="grid-item">
                    <h3>Weekly Bible Study Highlights</h3>
                    <iframe
                      className="video-frame"
                      src="https://www.youtube.com/embed/sampleVideoId"
                      title="Weekly Bible Study Highlights"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p>Catch up on the latest Bible study sessions.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPrayer;