'use client';
import Slider from 'react-slick';

import Image from 'next/image';
export default function Carousel({children,className,slidesToShow,autoplaySpeed,speed,arrows}) {
    const settings = {
      infinite: true,
      speed:speed === undefined? 500:speed,
      slidesToShow,
      cssEase: 'linear',          
      arrows:arrows === undefined?false:arrows,
      slidesToScroll: 1,
      autoplay: true,        // Enable autoplay
      autoplaySpeed:autoplaySpeed === undefined? 3000 :autoplaySpeed   // Set the autoplay speed in milliseconds (e.g., 3000ms or 3 seconds)
    };
  
    return (
      <Slider {...settings} className={`${className}`}>
        {children}
             
      </Slider>
    // <h1>ouefnbegnu</h1>
    );
  };
  
  