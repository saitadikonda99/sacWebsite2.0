import React from 'react'
import { Link as Scroll} from 'react-scroll'
import './NavBar.css'


import logo from '../../../Assets/Logos/ZeroOneClubLogo.png'

function NavBar() {
  return (
      <div className="clubpage-nav-component">
        <div className="clubpage-nav-component-in">
            <div className="nav-logo">
                <h1>ZeroOne CLUB</h1>
            </div>
            <div className="nav-details">
                <Scroll to="club-hero-content" smooth={true} duration={100} offset={0}>
                    Home
                </Scroll>
                <Scroll to="club-main-component" smooth={true} duration={100} offset={0}>
                    Know More
                </Scroll>
                notifications
            </div>
          </div>
      </div>
  )
}

export default NavBar