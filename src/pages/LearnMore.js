import React from 'react';
import { Container, Box, Card, CardContent, Typography, Paper } from '@mui/material';
import './LearnMore.css'; // Import custom CSS if needed

const LearnMore = () => {
  const sections = [
    {
      title: "Mission & Values",
      content: `
        We are committed to spreading the message of love, faith, and unity to all people, inspiring change and transformation.
      `,
    },
    {
      title: 'Beliefs',
      content: `
        Our beliefs are rooted in biblical teachings, guiding us to live a life of integrity, compassion, and service.
      `,
    },
    {
      title: 'History',
      content: `
        Founded in 1990, we have a rich history of service to the community and spreading hope and love through our faith.
      `,
    },
    {
      title: 'Multiethnic Unity',
      content: `
        We celebrate diversity and promote inclusivity, creating a space where all people can experience God's love regardless of background.
      `,
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4, // Padding for the container
          borderRadius: '20px', // Rounded corners
          backgroundColor: '#ffffff', // Clean white background
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#333', // Custom color for the heading
            mb: 4,
          }}
        >
          Learn More About Us
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4, // Space between cards
          }}
        >
          {sections.map((section, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: '#f9f9f9', // Light gray background for modern design
                padding: '16px', // Additional padding for better spacing
                borderRadius: '15px', // Smooth corners
                boxShadow: 3, // Modern shadow effect
                transition: 'transform 0.3s', // Animation for hover effect
                '&:hover': {
                  transform: 'scale(1.02)', // Subtle scale effect on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {section.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    whiteSpace: 'pre-line', // Preserve newlines in text for readability
                  }}
                >
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default LearnMore;