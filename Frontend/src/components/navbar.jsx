import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style/navbar.css'; // You can style the navbar with CSS here

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">Inferno Coders</h1>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link to="/college_rating">College Rating</Link></li>
        <li className="nav-item"><Link to="/upcoming_contest">Upcoming Contest</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
