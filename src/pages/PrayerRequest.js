import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import './PrayerRequest.css';

const PrayerRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log({ name, email, prayerRequest });
  };

  return (
    <Container
      sx={{
        py: 6,
        border: '2px solid #e0e0e0', // Border for container
        borderRadius: '20px',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Shadow effect
        backgroundColor: '#f9fafb', // Light background color
        padding: 4,
        maxWidth: '800px', // Responsive max-width
        margin: 'auto',
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', letterSpacing: 1 }}>
          Share Your Prayer Request
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', marginTop: 2 }}>
          Your prayer is important to us. Let us stand with you in faith.
        </Typography>
      </Box>

      {/* Prayer Request Form Section */}
      <Paper sx={{ padding: 4, borderRadius: '15px', boxShadow: 3, backgroundColor: '#ffffff' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Name Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3f51b5', // Hover border color
                    },
                  },
                }}
              />
            </Grid>

            {/* Email Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3f51b5', // Hover border color
                    },
                  },
                }}
              />
            </Grid>

            {/* Prayer Request Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Prayer Request"
                variant="outlined"
                multiline
                rows={5}
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
                placeholder="Write your prayer request here..."
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3f51b5', // Hover border color
                    },
                  },
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  padding: '10px 20px',
                  borderRadius: '30px', // Rounded button
                  fontSize: '16px',
                  mt: 3,
                  background: 'linear-gradient(to right, #3f51b5, #2196f3)', // Gradient button
                  '&:hover': {
                    background: 'linear-gradient(to right, #2196f3, #3f51b5)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Submit Prayer Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default PrayerRequest;