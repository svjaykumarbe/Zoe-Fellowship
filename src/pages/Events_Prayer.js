import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Event.css'; // Custom styles for extra flair

const EventPrayer = () => {
  const events = [
    { date: '2024-12-01', name: 'Community Prayer Meeting', description: 'Join us for a time of prayer and worship.' },
    { date: '2024-12-05', name: 'Bible Study Group', description: 'An evening of studying the Word together.' },
    { date: '2024-12-14', name: 'Saturday Worship Service', description: 'A powerful time of worship and prayer.' },
    { date: '2024-12-20', name: 'Christmas Celebration', description: 'Celebrate the birth of Christ with us.' },
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) > new Date());

  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f9f9f9' }}>
      {/* Header Section */}
      <Paper elevation={3} sx={{ py: 4, textAlign: 'center', backgroundColor: '#0d47a1', color: '#ffffff' }}>
        <Typography variant="h3" fontWeight={700}>
          Upcoming Worship Services
        </Typography>
        <Typography variant="h6" mt={2} fontWeight={400}>
          Join us for inspiring worship and prayer events at Zoe International Ministries.
        </Typography>
      </Paper>

      <Grid container spacing={4} mt={4}>
        {/* Left Column: Calendar and Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
            <Typography variant="h5" mb={2} fontWeight={600} color="primary">
              Event Calendar
            </Typography>
            <Calendar />
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" fontWeight={600} mb={2} color="primary">
              Upcoming Events
            </Typography>
            {upcomingEvents.map((event, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={600}>
                  {event.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {event.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Right Column: Events Highlights */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
            <Typography variant="h5" mb={3} fontWeight={600} color="primary">
              Events & Highlights
            </Typography>
            <Grid container spacing={2}>
              {/* Highlight 1 */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  <CardMedia
                    component="iframe"
                    height="200"
                    src="https://www.youtube.com/embed/sampleVideoId"
                    title="Sunday Sermon Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      Sunday Sermon Highlights
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Watch highlights from our recent sermons.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Highlight 2 */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  <CardMedia
                    component="iframe"
                    height="200"
                    src="https://www.youtube.com/embed/sampleVideoId"
                    title="Weekly Bible Study Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      Weekly Bible Study Highlights
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Catch up on the latest Bible study sessions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventPrayer;