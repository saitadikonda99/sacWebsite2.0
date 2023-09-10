import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import './NotFound.css'

function NotFound() {

  useEffect(() => {
    document.title = '404 | KLU SAC';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Student Activity Center at KLEF';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);


  return (
          <div className="NotFound-Component">
            <div className="NotFound-Component-in">
              <div className="NotFound-Back">
                <Link to='/' className='NotFound-Back-link' >Back to Home</Link>
              </div>
            </div>
          </div>
    )
  }
  
export default NotFound