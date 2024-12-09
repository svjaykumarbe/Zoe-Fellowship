import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Gallery = () => {
  const [images, setImages] = useState([]); // Store uploaded images

  // Handle file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  // Remove an image
  const removeImage = (url) => {
    setImages((prev) => prev.filter((image) => image !== url));
  };

  return (
    <Container
      maxWidth="md" // Restricts the width for a centered and modern look
      sx={{
        backgroundColor: '#f9f9f9', // Light background
        borderRadius: 4,
        boxShadow: 3,
        py: 4,
        px: 3,
      }}
    >
      {/* Gallery Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#107C17',
          textTransform: 'uppercase',
          mb: 4,
        }}
      >
        Gallery
      </Typography>

      {/* Upload Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component="label"
          startIcon={<AddPhotoAlternateIcon />}
          sx={{
            borderRadius: 2,
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          Upload Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </Button>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={`Uploaded image ${index}`}
                />
                <CardActions
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    color="error"
                    onClick={() => removeImage(image)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ width: '100%', mt: 2 }}
          >
            No images uploaded. Click "Upload Images" to get started.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Gallery;