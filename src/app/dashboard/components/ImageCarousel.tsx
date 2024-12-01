'use client';
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  './images/food-1.avif',
  './images/food-2.avif',
  './images/food-3.avif',
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '70%', margin: 'auto', mt: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
