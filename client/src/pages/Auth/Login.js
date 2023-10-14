import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", formData);

      if (response.status === 200) {
        console.log("Login successful!");
        // Redirect to the dashboard or another page on success
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed: " + error.message);
    }
  };

  return (
    <div className="login-component">
      <div className="login-container">
        <div className="login-container-in">
          <form onSubmit={handleSubmit}>
            <div className="login-one">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="login-two">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="login-three">
              <button type="submit">Login</button>
              <Link to="/signup" className="login-link">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
