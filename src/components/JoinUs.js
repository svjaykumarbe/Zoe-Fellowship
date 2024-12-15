import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './JoinUs.css';

const JoinUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Add form submission logic here
    setShowModal(false);
  };

  return (
    <div className="join-us-module">
      <div className="join-us-content">
        <h2 className="heading">Become a Part of Our Community</h2>
        <p className="subheading">
          Join Zoe International Ministries to connect with like-minded people,
          access exclusive resources, and grow in faith with us.
        </p>
        <Button
          variant="primary"
          onClick={handleShowModal}
          className="join-us-button"
        >
          Join Now
        </Button>
      </div>

      {/* Modal for Registration Form */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Join Us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="form-group">
              <Form.Label className="form-label">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formContactNumber" className="form-group">
              <Form.Label className="form-label">Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contactNumber"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="form-group">
              <Form.Label className="form-label">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label className="form-label">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JoinUs;