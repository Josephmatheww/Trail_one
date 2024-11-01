import React, { useContext, useState } from 'react';
import './login.css';
import TextInput from './TextInput'; 
import { authenticateUser } from './Userapi';
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/ContextShare';

function Loginn() {
  const { setUserData } = useContext(userDataContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const data = await authenticateUser(username, password);
      setUserData(data); 
      setMessage('Login successful!');
      navigate('/home', { state: { userData: data } });
    } catch (error) {
      setMessage(error.message);
    }
  };
  
  return (
    <div className="login-container">
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
    </div>
  );
}

export default Loginn;
