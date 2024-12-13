import React from 'react';
import { useNavigate } from "react-router-dom";

const Register = ({ toggleLogin }) => {
  const navigate = useNavigate()
  const handleLogin = () => {
    // Add authentication logic here (if any)
    toggleLogin();
    navigate('/')
  };
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <br />
        <button onClick={handleLogin}>Register</button>
      </form>
    </div>
  );
};

export default Register;
