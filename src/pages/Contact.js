import React from 'react';
import './ContactUs.css'; // CSS file for styling

const pastors = [
  {
    name: 'Pastor Daniel Shetty',
    role: 'Senior Pastor',
    email: 'daniel@zoeinternationalministry.com',
    phone: '+1 (647) 888-3776',
    bio: 'Pastor Daniel Shetty has been leading our church for over 10 years with a focus on community, spiritual growth, and service to others.',
    image: './Daniel.jpg', // Replace with actual image path
  },
  {
    name: 'Sunitha Daniel',
    role: 'Associate Pastor',
    email: 'sunitha@zoeinternationalministry.com',
    phone: '+1 (416) 662-9270',
    bio: 'Sunitha Daniel is passionate about worship, teaching, and helping others grow in their faith journey.',
    image: './Sunitha.jpg', // Replace with actual image path
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Our Pastors</h2>
      <div className="pastor-grid">
        {pastors.map((pastor, index) => (
          <div className="pastor-card" key={index}>
            <img src={pastor.image} alt={pastor.name} className="pastor-image" />
            <h3>{pastor.name}</h3>
            <p className="role">{pastor.role}</p>
            <p><strong>Email:</strong> <a href={`mailto:${pastor.email}`}>{pastor.email}</a></p>
            <p><strong>Phone:</strong> <a href={`tel:${pastor.phone}`}>{pastor.phone}</a></p>
            <p className="bio">{pastor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;