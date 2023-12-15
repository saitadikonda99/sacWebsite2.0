import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate, Link} from 'react-router-dom'
import useAuth from '../../../hooks/UseAuth'
import './Login.css'

function Login() {
    const { auth, setAuth } = useAuth()
    const host = process.env.REACT_APP_HOST
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from || "/Admin";

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

    const [error, setError] = useState(null);

   // Handle input changes
   const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${host}/login`,
              JSON.stringify(formData),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              }
            );

            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            const role = response?.data?.role;
            const user = response?.data?.username;
            const id = response?.data?.id;
            
            // set the auth state
            setAuth({
                id,
                accessToken,
                refreshToken,
                role,
                user,
            });

            navigate(from, { replace: true });

        } catch (error) { 
            console.log(error)
            setError(error?.message);
        }  
    };


  return (
   
    <div className="LoginComponent">
        <div className="LoginComponent-in">
            <div className="LoginComponent-logo">
                <h2>KL SAC Admin Panel</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="LoginComponent-one">
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleInputChange}                        
                    />
                </div>
                <div className="LoginComponent-two">
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}                        
                    />
                </div>
                <div className="LoginComponent-three">
                    <Link to='/forgot'>forgot password?</Link>
                </div>
                <div className="LoginComponent-four">
                    <button className='Login-button' type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login