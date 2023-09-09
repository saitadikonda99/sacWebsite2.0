import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'

function HomeNav() {
  return (
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
                        <Link className='HomeNavIndex-in-link' to='/'>Read Blogs</Link>
                        <Link className='HomeNavIndex-in-link' to='/'>Upcoming Events</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeNav