import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginn from './Components/login/Loginn';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile'; 

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginn setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
        <Route path="/user-profile" element={<UserProfile userData={userData} setUserData={setUserData} />} />
      </Routes>
    </Router>
  );
}

export default App;
