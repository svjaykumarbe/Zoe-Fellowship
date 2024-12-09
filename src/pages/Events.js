import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Box, Card, CardContent, Typography, Paper, Grid, Button } from '@mui/material';
import './Event.css';

const Events = () => {
  const [date, setDate] = useState(new Date());

  // Sample list of upcoming events
  const upcomingEvents = [
    { date: 'December 14, 2024', title: 'Saturday Worship Service', description: 'A powerful time of worship and prayer.' },
    { date: 'December 20, 2024', title: 'Christmas Celebration', description: 'Celebrate the birth of Christ with us.' },
  ];

  return (
    <Container
      sx={{
        py: 6,
        border: '2px solid #e0e0e0', // Container border
        borderRadius: '20px', // Rounded corners
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Shadow
        padding: 4,
        backgroundColor: '#fff',
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
          mb: 4,
        }}
      >
        Upcoming Worship Service
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          color: '#666',
          mb: 6,
        }}
      >
        Join us for inspiring worship and prayer events at Zoe International Ministries.
      </Typography>

      {/* Main Content Section */}
      <Grid container spacing={4}>
        {/* Left Column: Calendar */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: '#f9f9f9',
              padding: '24px',
              borderRadius: '15px',
              boxShadow: 3,
              height: '100%',
            }}
          >
            <Typography variant="h5" component="div" gutterBottom>
              Select a Date
            </Typography>
            <Calendar onChange={setDate} value={date} />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Selected Date: {date.toDateString()}
            </Typography>
          </Paper>
        </Grid>

        {/* Right Column: Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: '#f9f9f9',
              padding: '24px',
              borderRadius: '15px',
              boxShadow: 3,
              height: '100%',
            }}
          >
            <Typography variant="h5" component="div" gutterBottom>
              Upcoming Events
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: '#ffffff',
                    padding: '16px',
                    borderRadius: '15px',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)', // Hover effect to lift the card
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.date} <br /> {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Highlights Section */}
      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            color: '#3f51b5', // Blue color for event title
          }}
        >
          EVENTS & HIGHLIGHTS
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center', overflow: 'hidden' }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)', // Hover effect to lift the card
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  Sunday Sermon Highlights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Watch highlights from our recent sermons.
                </Typography>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/dsyUPCXBy-g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '10px', overflow: 'hidden' }} // Remove overflow
                ></iframe>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)', // Hover effect to lift the card
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  Weekly Bible Study Highlights
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Watch highlights from our Bible study sessions.
                </Typography>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/dsyUPCXBy-g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '10px', overflow: 'hidden' }} // Remove overflow
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Events;