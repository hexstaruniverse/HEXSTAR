'use client';
import Slider from 'react-slick';

import Image from 'next/image';
export default function Carousel({children,className,slidesToShow}) {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow,
      arrows:false,
      slidesToScroll: 1,
      autoplay: true,        // Enable autoplay
      autoplaySpeed: 3000,   // Set the autoplay speed in milliseconds (e.g., 3000ms or 3 seconds)
    };
  
    return (
      <Slider {...settings} className={`${className}`}>
        {children}
             
      </Slider>
    // <h1>ouefnbegnu</h1>
    );
  };
  
  