import React from 'react';
import { Link } from 'react-router-dom'; 

const MyNavbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f0f0f0' , marginRight:'20px', marginLeft: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/home" style={{ marginRight: '15px', color: 'black', textDecoration: 'none' }} activeclassName="active">
          Home
        </Link>
        <Link to="/profile" style={{ marginRight: '15px', color: 'black', textDecoration: 'none' }} activeClassName="active">
          Profile
        </Link>
        <Link to="/report" style={{ color: 'black', textDecoration: 'none' }} activeClassName="active">
          Report
        </Link>
      </div>
      <div>
        <Link to="/signup" style={{ color: 'black', textDecoration: 'none' }}>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default MyNavbar;
