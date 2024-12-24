import './Home.scss';
import { Carousel, Design, Services } from '../../components';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { home_carousel_items } from '../../utilities';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // useGSAP(() => {
  //   gsap.to('.slider-container', {
  //     transfrom: 'translateX(00)',
  //     ease: 'power1.inOut',
  //     scrollTrigger: {
  //       trigger: '.slider-container',
  //       start: 'top 22%',
  //       end: 'top -260%',
  //       pin: true,
  //       scrub: 2,
  //     },
  //   });
  // });
  return (
    <section className="home">
      <section className="home_section1">
        <Carousel>
          {home_carousel_items.map((item) => (
            <section key={item.id} className="img_container">
              <img className="" src={item.img} alt={item.img} />
            </section>
          ))}
        </Carousel>
      </section>
      <Design />
      <Services />
    </section>
  );
};

export default Home;
