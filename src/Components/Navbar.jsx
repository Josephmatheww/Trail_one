import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ userData, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/');
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="nav-items-left">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="#" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="user-profile d-flex align-items-center">
          <Link to="/user-profile" state={{ userData }} className="user-profile-link d-flex align-items-center">
            <h1 className="user-profile-text me-2">User-Profile</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
