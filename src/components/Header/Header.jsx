import './Header.scss';
import { navItems } from '../../utilities';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from('.logo', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'bounce',
    });
    t1.from('.nav_items', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.5,
      ease: 'bounce',
    });
  });
  return (
    <header className="header">
      <section className="logo">
        <img src={logo} alt="logo" />
        <h5>design roots</h5>
      </section>
      <nav>
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) => {
              return `${isActive && 'active '} nav_items`;
            }}
            to={item.path}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
