import React, { useState } from 'react';
import { Carousel } from 'antd';

const BannerCarousel = () => {



  const slides = [
    { id: 1, src: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop', alt: 'Banner 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop', alt: 'Banner 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop', alt: 'Banner 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop', alt: 'Banner 4' },
  ];

  return (
    <div className="w-full">

      <Carousel dotPosition='left' autoplay className="w-full h-[100px] p-4">
        {slides.map(slide => (
          <div key={slide.id} className="w-full h-[100px]">
          
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
