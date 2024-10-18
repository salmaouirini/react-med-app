// App.js

import React from 'react';
import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';


function App() {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology' },
      ];
  return (
    <Router>
      {/* Render the Navbar on every page */}

      {/* Define the routes for different pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ReviewForm" element={<ReviewForm doctors={doctors} />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/ReportsLayout" element={<ReportsLayout />} />
        <Route path='/ProfileCard' element={<ProfileCard />}/>
                            


      </Routes>
    </Router>
  );
}

export default App;
