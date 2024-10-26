// Loginn.js
import React, { useState } from 'react';
import './login.css';
import TextInput from './TextInput';
import { authenticateUser } from './Userapi';

function Loginn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const data = await authenticateUser(username, password);
      setUserData(data);
      setMessage('Login successful!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleBackToLogin = () => {
    setUserData(null);
    setUsername('');
    setPassword('');
    setMessage(null);
  };

  return (
    <div className="login-container">
      {!userData ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <TextInput
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />

            <TextInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <button type="submit" className="login-btn">Login</button>
          </form>

          {message && <div className="message">{message}</div>}
        </>
      ) : (
        <div className="user-card">
          <h3>User Information</h3>
          <div><strong>Full Name:</strong> {userData.fullName}</div>
          <div><strong>Company Name:</strong> {userData.companyName}</div>
          <div><strong>Role:</strong> {userData.role}</div>
          <button onClick={handleBackToLogin} className="back-btn">Back to Login</button>
        </div>
      )}
    </div>
  );
}

export default Loginn;
