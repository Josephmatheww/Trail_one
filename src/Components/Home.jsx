import React from 'react';
import './home.css';
import Navbar from './Navbar';

const Home = ({ userData }) => {
  return (
    <div>
      <Navbar userData={userData} />
      <div>
        <h1 className='head'>Welcome To the Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
