import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Carousel = ({ children }) => {
  useGSAP(() => {
    gsap.to('.slider-container', {
      x: '-300',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.slider-container',
        start: 'top 22%',
        end: 'top -190%',
        pin: true,
        scrub: 2,
      },
    });
  });
  var settings = {
    dots: false,
    autoplay: true,
    arrows: false,
    speed: 5000,
    infinite: true,
    cssEase: 'linear',
    slidesToShow: 4,
    autoplaySpeed: 5000,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default Carousel;
