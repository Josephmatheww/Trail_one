import React, { useState } from 'react';
import './login.css';

function Loginn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await fetch('https://staging-api.pomodore.in/api/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
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
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

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
