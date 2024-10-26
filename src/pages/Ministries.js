import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Ministries.css';

const Ministries = () => {
  const [show, setShow] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const ministries = [
    {
      name: 'Zoe Fellowship Ministry',
      description:
        'Our Children’s Ministry provides a fun, interactive environment where kids can learn about the love of Jesus. Through Sunday school, vacation Bible school, and other activities, we help build a strong foundation of faith for the youngest members of our congregation.',
      image: './EventsPic.jpg',
    },
    {
      name: 'Zoe - Daughters of the King',
      description:
        'The Worship Ministry leads our congregation in heartfelt worship through music and song. We aim to create an atmosphere of praise where the presence of God is welcomed, and the hearts of the people are lifted.',
      image: '/WomensMinistry.jpg',
    },
    {
      name: 'Outreach Ministry',
      description:
        'The Outreach Ministry is dedicated to serving the community by providing food drives, clothing donations, and assisting those in need. Our goal is to share God’s love by helping others in practical and meaningful ways.',
      image: '/Outreach.jpg',
    },
    
  ];

  const handleShow = (ministry) => {
    setSelectedMinistry(ministry);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="ministries-container">
      <h2>Our Ministries</h2>
      <div className="ministries-grid">
        {ministries.map((ministry, index) => (
          <div className="ministry-card" key={index} onClick={() => handleShow(ministry)}>
            <img src={ministry.image} alt={ministry.name} className="ministry-image" />
            <h3>{ministry.name}</h3>
            <p>{ministry.description.substring(0, 100)}...</p>
            <Button variant="primary">Learn More</Button>
          </div>
        ))}
      </div>

      {selectedMinistry && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMinistry.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedMinistry.image} alt={selectedMinistry.name} className="modal-image" />
            <p>{selectedMinistry.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Ministries;