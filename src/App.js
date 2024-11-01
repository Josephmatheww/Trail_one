import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginn from './Components/login/Loginn';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import ContextShare, { userDataContext } from './Components/context/ContextShare';

function App() {
  return (
    <ContextShare>
      <Router>
        <Routes>
          <Route path="/" element={<Loginn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ContextShare>
  );
}

export default App;
