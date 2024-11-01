import React, { useContext } from 'react';
import { userDataContext } from './context/ContextShare'; 
import './home.css';
import Navbar from './Navbar';

const Home = () => {
  const { userData } = useContext(userDataContext); 

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
