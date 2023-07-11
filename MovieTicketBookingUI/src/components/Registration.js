import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieService from "../services/MovieService";
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [identity, setIdentity] = useState('');
  const [emailId, setEmailId] = useState('');

 // const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIdentityChange = (e) => {
    setIdentity(e.target.value);
  };
  const handleMailIdChange = (e) => {
    setEmailId(e.target.value);
  };
  const register = async () => {
    const user = {
      name: username,
      password: password,
      identity: identity,
      emailId: emailId
    };

    try {
      const response = await MovieService.saveUser(user).then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      })

      if (response.status === 200) {
        // Registration successful, display success message
        setError('Registration successful. Please login.');
        navigate('/login');
      } else {
        // Registration failed, display error message
        setError('Registration failed. Please try again.');
        navigate('/register');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred during registration');
    }
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form onSubmit={handleRegistration} className="registration-form">
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">
  Identity
</label>
<div className="flex mt-2">
  <label className="inline-flex items-center mr-4">
    <input
      type="radio"
      name="identity"
      value="M"
      checked={identity === "M"}
      onChange={(e) => handleIdentityChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Male</span>
  </label>
  <label className="inline-flex items-center mr-4">
    <input
      type="radio"
      name="identity"
      value="F"
      checked={identity === "F"}
      onChange={(e) => handleIdentityChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Female</span>
  </label>
  <label className="inline-flex items-center">
    <input
      type="radio"
      name="identity"
      value="O"
      checked={identity === "O"}
      onChange={(e) => handleIdentityChange(e)}
      className="form-radio h-5 w-5 text-gray-600"
    />
    <span className="ml-2 text-gray-600">Others</span>
  </label>
</div>

        </div>
        <div>
          <label>Mail Id</label>
          <input type="email" value={emailId} onChange={handleMailIdChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button
            type="submit"
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Register
          </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Registration;
