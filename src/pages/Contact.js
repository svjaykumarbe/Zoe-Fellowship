import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactUs.css';

const pastors = [
  {
    name: 'Pastor Daniel Shetty',
    role: 'Senior Pastor',
    email: 'daniel@zoeim.com',
    phone: '+1 (647) 888-3776',
    bio: 'Pastor Daniel Shetty has been leading our church for over 10 years with a focus on community, spiritual growth, and service to others.',
    image: './Daniel.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/sunitha.daniel.1',
      twitter: 'https://twitter.com/abc',
      instagram: 'https://instagram.com/abc'
    }
  },
  {
    name: 'Sunitha Daniel',
    role: 'Associate Director',
    email: 'sunitha@zoeim.com',
    phone: '+1 (416) 662-9270',
    bio: 'Sunitha Daniel is passionate about worship, teaching, and helping others grow in their faith journey.',
    image: './Sunitha.jpg',
    socialLinks: {
      facebook: 'https://www.facebook.com/sunitha.daniel.1',
      twitter: 'https://twitter.com/abc',
      instagram: 'https://instagram.com/abc'
    }
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
            <div className="social-links">
              {pastor.socialLinks.facebook && (
                <a href={pastor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
              )}
              {pastor.socialLinks.twitter && (
                <a href={pastor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
              )}
              {pastor.socialLinks.instagram && (
                <a href={pastor.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;