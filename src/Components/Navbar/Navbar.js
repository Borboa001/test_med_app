// src/Components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');  // or your auth key
    const email = localStorage.getItem('email');  // user's email stored at login/signup
    
    if (token && email) {
      setIsLoggedIn(true);

      // Extract username from email (before @)
      const name = email.split('@')[0];
      setUsername(name);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');   // also clear the email
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/appointments">Appointments</Link>

      {isLoggedIn ? (
        <>
          <span className="navbar-username">Hello, {username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
