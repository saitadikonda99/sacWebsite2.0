import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-component">
      <div className="not-found-container"> 
        <div className="not-found-one">
           <p>404</p>
        </div>
      <div className="not-found-two">
        <p> Page Not Found </p>
          </div>
            </div>
              <div className="not-found-three">
               <h3>KLEF SAC</h3>
           </div>
           <div className="not-found-four">
               <Link to='/' className='not-found-four-link' >Back to Home</Link>
           </div>
      </div>
    )
}

export default NotFound