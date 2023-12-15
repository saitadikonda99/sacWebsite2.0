import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import './Reset.css'

function Reset() {

    const location = useLocation();
    const pathSegments = location.pathname.split('/reset/');
  
    // Get the segment after localhost:3000/
    const resetToken = pathSegments[1];

    const [reset, setReset] = useState({ password: '' })
    const host = process.env.REACT_APP_HOST
    
    const handleChange = (e) => {
        setReset({ ...reset, [e.target.name]: e.target.value })
    }

    const handleReset = async (e) => {
        e.preventDefault();

      try {

        const response = await axios.post(`${host}/reset/${resetToken}`,
          JSON.stringify({password: reset.password}),
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );

        alert(response.data.message)
        
      } catch (error) {
        alert('Password reset failed')
      }

    }

  return (

        <div className="ResetComponent">
            <div className="ResetComponent-in">
                <div className="Reset-one">
                    <h2>Reset your password</h2>
                    <p>Enter your password address linked to your account</p>
                </div>
                <div className="Reset-two">
                    <input type="password" 
                        name='password'
                        placeholder='Enter your new password'
                        value={reset.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="Reset-three">
                    <button onClick={handleReset} id={reset.password? 'Reset-btn' : ''} >Next</button>
                </div>
            </div>
       </div>
  )
}

export default Reset