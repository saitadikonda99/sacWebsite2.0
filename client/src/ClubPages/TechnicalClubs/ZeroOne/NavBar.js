import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { HiMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import ZeroOneClubLogo from '../../../Assets/Logos/ZeroOneClubLogo.png';

function NavBar() {
  const [isopen, setIsopen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const toggleNav = () => {
    setIsopen(!isopen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const changeWidth = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const NavLinks = () => (
    <div className={size > 900 ? 'nav-links' : 'nav-links-hide'}>
      <div className="nav-links-in">
        {[
          { to: 'clubs-body', text: 'Home' },
          { to: 'clubs-what-do', text: 'Wings' },
          { to: 'clubs-Glimpse', text: 'Glimpse' },
          { to: 'clubs-team', text: 'Team' },
          { to: 'club-activity-component', text: 'Activities' },
        ].map((link) => (
          <Scroll
            key={link.to}
            activeClass="active"
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
          >
            {link.text}
          </Scroll>
        ))}
      </div>
    </div>
  );

  return (
    <div className={isopen ? 'nav-color' : 'course-nav-container'}>
      <div className="nav-logo">
        <div className="logo-in">
          <RouterLink onClick={scrollToTop}>
            <img
              className={isopen ? 'image-hide' : 'logo-in-image'}
              src={ZeroOneClubLogo}
              alt="Logo"
            />
          </RouterLink>
        </div>
      </div>

      <div className={size < 900 ? 'toggle-container' : 'toggle-container-hide'}>
        <div className="toggle-button">
          {isopen ? (
            <IoCloseSharp onClick={toggleNav} className="icon" />
          ) : (
            <HiMenu onClick={toggleNav} className="icon" />
          )}
        </div>
        <div className="toggle-nav">
          <div className={isopen ? 'toggle-nav-links' : 'toggle-nav-links-hide'}>
            <div className="toggle-nav-links-in">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>

      <NavLinks />
    </div>
  );
}

export default NavBar;
