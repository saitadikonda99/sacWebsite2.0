import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:3001/register", formData);

      if (response.status === 201) {
        console.log("Registration successful!");
        alert("Registration successful!");
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed: " + error.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            />
            <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            />
            <input
            type="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            />
            <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            />
            <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default Register;
