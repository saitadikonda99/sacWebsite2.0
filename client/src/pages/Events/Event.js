import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Event.css'
import './MobileView.css'
import Footer from '../../components/home/Footer/Footer'
import NavBar from './NavBar'
import '../../components/home/HomeNav/HomeNav.css';


// images start here 
import eventimg from '../../Assets/event.png'


function Event() {

    useEffect(() => {
        document.title = 'Events | KLU SAC';
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Student Activity Center at KLEF';
        document.head.appendChild(metaDescription);
    
        return () => {
          document.head.removeChild(metaDescription);
        };
      }, []);

    useEffect(() => {
        document.title = 'Events | KLU SAC';
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Events at KLU SAC';
        document.head.appendChild(metaDescription);
    
        return () => {
          document.head.removeChild(metaDescription);
        };
      }, []);

//   ---------------------------------------------

        const [screenWidth, setScreenWidth] = useState(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        useEffect(() => {
            window.addEventListener('resize', handleResize);

            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, []);

//   ---------------------------------------------

  return (

    <div className="Event-component">
        <div className="Event-component-in">
        <div className="Event-Nav">
            <div className='HomeNavComponent'>
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
                            <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                        </div>
                    </div>
                </div>
            </div>
                {screenWidth < 768 ?  <NavBar/> : '' }
        </div>
        <div className="event-container">
            <div className="event-head">
                <h1>2024 Season</h1>
                <p>Find, compete, and earn points at the largest, most diverse hacker events in the world.</p>
            </div>
            <div className="event-main">
                <div className="event-main-in">
                    {/* <div className="event-main-head">
                        <h2>Upcoming Events</h2>
                    </div> */}
                    <div className="event-main-content">

                        <div className="event-main-content-one">
                            <div className="ev-main-one ev-main-cm">
                                <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-two ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-three ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-four ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                        </div>

                            <div className="event-main-content-two">
                            <div className="ev-main-one ev-main-cm">
                                <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-two ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-three ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            <div className="ev-main-four ev-main-cm">
                            <div className="ev-main-one-img">
                                    <img src={eventimg} alt="eventimg" />
                                </div>
                                <div className="ev-main-one-content">
                                    <h2>Top Hacks</h2>
                                    <p>SEP 15TH - 17TH</p>
                                    <h4>Baltimore, Maryland</h4>
                                    <p>In-Person Only</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="event-footer">
                <Footer />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Event