import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'

function HomeNav() {
  return (
        <div className="Home-Component">
            <div className="Home-Component-in">
                <div className="homeNav-logo">
                   <Link to="/clubs" className="homeNav-index-in-link"><h1>Student Activity Center</h1></Link>
                </div>
                <div className="homeNav-index">
                    <div className="homeNav-index-in">
                        <Link to="/clubs" className="homeNav-index-in-link">Clubs</Link>
                        <Link to="/clubs" className="homeNav-index-in-link">Clubs</Link>
                        <Link to="/clubs" className="homeNav-index-in-link">Clubs</Link>
                        <Link to="/clubs" className="homeNav-index-in-link">Clubs</Link>

                    </div>
                </div>
            </div>
         </div>
  )
}

export default HomeNav