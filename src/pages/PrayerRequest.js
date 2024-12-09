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
        backgroundColor: '#fff',
        padding: 4,
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          Share Your Prayer Request
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', marginTop: 2 }}>
          Your prayer is important to us. Let us stand with you in faith.
        </Typography>
      </Box>

      {/* Prayer Request Form Section */}
      <Paper sx={{ padding: 4, borderRadius: '15px', boxShadow: 3 }}>
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
                  borderRadius: '10px',
                  fontSize: '16px',
                  mt: 3,
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