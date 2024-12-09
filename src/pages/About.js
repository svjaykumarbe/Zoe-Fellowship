import React from 'react';
import { Container, Box, Card, CardContent, Typography, Paper } from '@mui/material';
import './About.css'; // Import custom CSS if needed

const About = () => {
  const sections = [
    {
      title: "Our Church's History",
      content: `
        Founded in 2023, our church has served as a beacon of faith and community.
        From humble beginnings in a small wooden chapel, our congregation has grown to
        become one of the most vibrant and welcoming communities in the region.
        
        Today, we continue the legacy of our founders by expanding our outreach efforts,
        both locally and globally, and by maintaining our commitment to being a place of worship,
        service, and fellowship for all people.`,
    },
    {
      title: 'Our Mission',
      content: `
        - Revive: To revive the spiritual life of the people who connect so that they go and carry the mission.
        - Renew: Renewal of mind, spirit, and body, leading to transformed lives.
        - Refine: As silver is refined, so will they be refined with the word of God.`,
    },
    {
      title: 'Our Vision',
      content: `
        To build a strong community of believers who are united in their faith,
        empowered to make a difference in the world, and dedicated to the teachings of Jesus Christ.`,
    },
    {
      title: 'Our Values',
      content: `
        - Faith: We believe in the transformative power of faith in Jesus Christ.
        - Community: We are committed to fostering a community of love, support, and service.
        - Service: We believe in serving our neighbors and the world through acts of compassion and justice.
        - Worship: We are devoted to gathering together in worship, offering praise to God.`,
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
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
          About Our Church
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

export default About;