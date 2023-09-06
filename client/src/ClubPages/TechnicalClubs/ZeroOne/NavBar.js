import React from 'react'
import { Link as Scroll} from 'react-scroll'
import './NavBar.css'


import logo from '../../../Assets/Logos/ZeroOneClubLogo.png'

function NavBar() {
  return (
      <div className="clubpage-nav-component">
        <div className="clubpage-nav-component-in">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-know-more">
                <Scroll to="club-main-component-in" smooth={true} duration={100}>
                    <button>Know More</button>
                </Scroll>
            </div>
          </div>
      </div>
  )
}

export default NavBar