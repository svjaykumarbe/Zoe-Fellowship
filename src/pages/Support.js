import React from 'react';
import JoinUs from '../components/JoinUs';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import './Support.css'; // Import CSS for styling

const Support = () => {
  console.log("Support component rendered");

  return (
    <Container
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Light shadow for depth
      }}
    >
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: '#333',
            mb: 2,
          }}
        >
          Join Us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#555',
            lineHeight: 1.6,
            fontWeight: 400,
            mb: 3,
          }}
        >
          Together, we can make a difference! Be part of our mission to serve the community and spread love.
        </Typography>
      </Box>

      {/* JoinUs Section */}
      <Paper
        sx={{
          padding: 4,
          borderRadius: '12px',
          boxShadow: 3,
          backgroundColor: '#ffffff',
        }}
      >
        <JoinUs />
      </Paper>
    </Container>
  );
};

export default Support;