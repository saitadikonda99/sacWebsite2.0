import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css'
import Footer from '../../components/Footer/Footer'


// images start here 
import eventimg from '../../Assets/event.png'


function Event() {
  return (
    <div className="Event-component">
        <div className="event-component-in">
            <div className="event-navBar">
                {/* navbar */}
            </div>
            <div className="event-head">
                <h1>2024 Season</h1>
                <p>Find, compete, and earn points at the largest, most diverse hacker events in the world.</p>
            </div>
            <div className="event-main">
                <div className="event-main-in">
                    <div className="event-main-head">
                        <h2>Upcoming Events</h2>
                    </div>
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

                        <div className="event-back-to-home">
                            <Link to='/' className='back-to-home'>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-footer">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Event