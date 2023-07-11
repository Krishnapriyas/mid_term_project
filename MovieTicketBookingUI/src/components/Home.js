import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import MovieService from "../services/MovieService";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    const user = {
      name: username,
      password: password
    };

    try {
      const response = await MovieService.login(user);

      if (response.status === 200) {
        // User logged in successfully, navigate to the desired route
        if (user.name === "admin" && user.password === "admin") {
          navigate('/movieList');
        } else {
          // If it is a user, navigate to user homepage
          navigate('/userHome');
        }
      } else {
        // Login failed, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      setError('Invalid username or password');
    }
  };

  
 
  const navigateToRegistrationPage = () => {
    navigate('/register');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>Login</button>
        <button type="button" onClick={navigateToRegistrationPage}>New User? Register Here</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
