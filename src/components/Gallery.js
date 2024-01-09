import React from 'react';
import { Grid, Typography } from '@mui/material';

const GallerySection = ({ title, imagePaths, width }) => (
  <div>
    <Typography marginTop='2rem' fontSize='40px' fontWeight='bold'>{title}</Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {imagePaths.map((path, index) => (
        <img key={index} src={process.env.PUBLIC_URL + path} alt={title} style={{ width, margin: '10px' }} />
        // Adjust the width as needed
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const chapelImages = [
    '/images/bin1.png',
    '/images/bin2.png',
    '/images/bin3.png',
    // Add more image paths as needed
  ];

  const mapImages = [
    '/images/map.png',
    '/images/dkmap1.png',
    '/images/maptodk.png',
  ];

  const receptionImages = [
    '/images/dk1.png',
    '/images/dk2.png',
    '/images/dk3.png',
    // Add more image paths as needed
  ];

  return (
    <section>
      <GallerySection title="Binangonan Chapel" imagePaths={chapelImages} width="600px" />
      <GallerySection title="Reception - (Da Kubo)" imagePaths={receptionImages} width="600px" />
      <GallerySection title="Google Map" imagePaths={mapImages} width="600px" />

      <Grid container spacing={3}>
        <Grid item xs={4}>
            <Typography fontWeight='bold' variant='h5'>Binangonan Chapel</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography fontWeight='bold' variant='h5'>Da Kubo</Typography>
        </Grid>
        <Grid item ml='-1.5rem' xs={4}>
            <Typography fontWeight='bold' variant='h5'>Chapel to Reception</Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Gallery;
