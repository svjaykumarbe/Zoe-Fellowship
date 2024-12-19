import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control form visibility
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Join Us Form Data:', formData);
    alert('Thank you for joining us!');
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the form when Close button is clicked
  };

  if (!isVisible) return null; // Render nothing if the form is hidden

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '500px',
        margin: '0 auto',
        p: 3,
        border: '1px solid #ddd',
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: '#555',
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Form Header */}
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Join Us
      </Typography>

      {/* Form Fields */}
      <TextField
        name="fullName"
        label="Full Name"
        variant="outlined"
        fullWidth
        required
        value={formData.fullName}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="address"
        label="Address"
        variant="outlined"
        fullWidth
        required
        value={formData.address}
        onChange={handleChange}
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        variant="outlined"
        fullWidth
        required
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 1, py: 1.5, fontWeight: 'bold' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default JoinUs;
