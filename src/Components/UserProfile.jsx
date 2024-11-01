import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userDataContext } from './context/ContextShare'; // Import context

const UserProfile = () => {
  const { userData, setUserData } = useContext(userDataContext); // Access userData and setUserData from context
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home'); 
  };

  const handleLogout = () => {
    setUserData(null); 
    navigate('/'); 
  };

  return (
    <div className="user-card">
      {userData ? (
        <>
          <h3>User Information</h3>
          <div><strong>Full Name:</strong> {userData.fullName}</div>
          <div><strong>Company Name:</strong> {userData.companyName}</div>
          <div><strong>Role:</strong> {userData.role}</div>
          <button onClick={handleBack} className="back-btn">Back to Home</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </>
      ) : (
        <div>No user information available.</div>
      )}
    </div>
  );
}

export default UserProfile;
