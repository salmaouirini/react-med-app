// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';


function App() {
  return (
    <Router>
      {/* Render the Navbar on every page */}
      <Navbar />

      {/* Define the routes for different pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </Router>
  );
}

export default App;
