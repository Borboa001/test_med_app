// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
<Route path="/signup" element={<SignUp />} />

        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<h2>Appointments Page Placeholder</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
