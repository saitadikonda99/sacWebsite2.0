import React from 'react';
import './clubspage.css';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

import ZeroOneLogo from '../Assets/ZeroOneLogo.png';

const clubspage = () => {
  return (
    <div className='clubPagesComponent'>
      <div className="HomeNavComponent">
                  <div className="HomeNavContainer">
                      <div className="HomeNavLogo">
                          <div className="HomeNavLogo-in">
                              <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
                          </div>
                      </div>
                      <div className="HomeNavIndex">
                          <div className="HomeNavIndex-in">
                              <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                              <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                              <Link className='HomeNavIndex-in-link' to='/blogs'>Read Blogs</Link>
                              <Link className='HomeNavIndex-in-link' to='/events'>Upcoming Events</Link>
                          </div>
                      </div>
                  </div>
              </div>
       <div className="clubPagesContainer">
          <div className="clubsPages-one">
            <div className="clubsPage-one-in">
              <div className="clubsPage-one-in-one">
                <h1>Explore Clubs</h1>
              </div>
              <div className="clubsPage-one-in-two">
                <div className="clubsPage-one-in-two-in">
                  <Scroll className='clubsPage-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >Central Technology Clubs</Scroll>
                  <Scroll className='clubsPage-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >Liberal arts, creative arts and hobby clubs</Scroll>
                  <Scroll className='clubsPage-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >Innovation & Entrepreneurship Clubs</Scroll>
                  <Scroll className='clubsPage-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >Extension Activities & Social Outreach Clubs</Scroll>
                  <Scroll className='clubsPage-scroll-links' activeClass="active" to="clubsPage-two-in-three" spy ={true} smooth={true} offset={-10} duration={200} >Health & Well Being Clubs (HWB)</Scroll>
                </div>
              </div>
            </div>
          </div>
          <div className="clubsPage-two">
            <div className="clubsPage-two-in">
              <div className="clubsPage-two-in-one">
                <div className="ct-in-one-header">
                  <h1>Central Technology Clubs</h1>
                </div>
                <div className="ct-in-one-one">
                  <div className="ct-in-one-one-in">
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>AeroElectric Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>CyberSecurity Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>WebApps Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>TechHuma Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>Animation Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>Automation Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>Agriculture Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>AI Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="clubsPage-two-in-two">
              <div className="ct-in-one-header">
                  <h1>Central Technology Clubs</h1>
                </div>
                <div className="ct-in-one-one">
                  <div className="ct-in-one-one-in">
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="clubsPage-two-in-three">
                <div className="ct-in-one-header">
                  <h1>Central Technology Clubs</h1>
                </div>
                <div className="ct-in-one-one">
                  <div className="ct-in-one-one-in">
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctiooi-comps">
                      <div className="ctiooi-comps-in">
                        <div className="ctiooi-comps-in-one">
                          <img src={ZeroOneLogo} alt="" />
                        </div>
                        <div className="ctiooi-comps-in-two">
                          <h1>ZeroOne Code Club</h1>
                          <div className="ctooi-comps-in-two-two">
                            <Link className='ctooi-comps-two-link' to='/clubs/zeroonecodeclub'>Know More</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
        <Footer />
    </div>
  )
}

export default clubspage