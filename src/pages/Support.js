import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Modal } from '@mui/material';
import JoinUs from '../components/JoinUs';
import './Support.css'; // Import CSS for styling

const Support = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showJoinUs, setShowJoinUs] = useState(false); // State to show JoinUs module

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add authentication logic here
  };

  const handleSignUpClick = () => {
    setShowJoinUs(true); // Show JoinUs component
  };

  const handleCloseModal = () => {
    setShowJoinUs(false); // Hide JoinUs component
  };

  return (
    <Container
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: 'md',
      }}
    >
      {/* Title Section */}
      <Box
        textAlign="center"
        sx={{
          mb: 6,
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600, color: '#333', mb: 2 }}>
          Become a Part of Our Community
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', lineHeight: 1.6, fontWeight: 400, mb: 3 }}>
          Join Zoe International Ministries to connect with like-minded people, access exclusive resources, and grow in faith with us.
        </Typography>
      </Box>

      {/* Login Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: '12px',
          mb: 4,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: 600 }}>
          Login to Your Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <span
            onClick={handleSignUpClick}
            style={{
              color: '#1976d2',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Sign Up
          </span>
        </Typography>
      </Paper>

      {/* JoinUs Modal */}
      <Modal
        open={showJoinUs}
        onClose={handleCloseModal}
        aria-labelledby="join-us-modal"
        aria-describedby="join-us-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '12px',
          }}
        >
          <Typography
            id="join-us-modal"
            variant="h5"
            sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
          >
            Join Us
          </Typography>
          <JoinUs />
          <Button
            onClick={handleCloseModal}
            sx={{
              display: 'block',
              mt: 2,
              mx: 'auto',
              color: 'white',
              backgroundColor: '#107C17',
              '&:hover': {
                backgroundColor: '#0b5a11',
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Support;