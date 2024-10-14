// Navbar.js

import React from 'react';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  const handleClick = () => {
    // Functionality for toggling the navbar (e.g., showing/hiding on mobile)
  };

  return (
    <nav>
      {/* Navigation logo section */}
      <div className="nav__logo">
        {/* Link to the home page */}
        <a href="/">
          StayHealthy
          {/* Insert an SVG icon of a doctor with a stethoscope */}
          <svg viewBox="0 0 8.467 8.467" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 -288.533)"><path d="M4.3 293.32a3.253 3.253 0 0 0-3.233 2.907H7.53a3.253 3.253 0 0 0-3.23-2.906z" fill="none" fill-rule="evenodd" stroke="#05afe8" stroke-width="1" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" class="stroke-000000"></path><path d="M3.001 294.945v.318M2.823 295.115h-.405s-.19-.983.346-1.293M3.585 294.945v.318" opacity="1" fill="none" fill-opacity="1" fill-rule="nonzero" stroke="#05afe8" stroke-width=".5" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-dashoffset="0" stroke-opacity="1" paint-order="stroke fill markers" class="stroke-000000"></path><path d="M3.763 295.115h.406s.19-1.332-.347-1.641" opacity="1" fill="none" fill-opacity="1" fill-rule="nonzero" stroke="#05afe8" stroke-width=".40000001" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-dashoffset="0" stroke-opacity="1" paint-order="stroke fill markers" class="stroke-000000"></path><path d="M5.394 293.691v.868" opacity="1" fill="none" fill-opacity="1" fill-rule="nonzero" stroke="#05afe8" stroke-width=".5" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-dashoffset="0" stroke-opacity="1" paint-order="stroke fill markers" class="stroke-000000"></path><circle cx="4.298" cy="291.188" r="2.014" fill="none" fill-rule="evenodd" stroke="#05afe8" stroke-width="1" stroke-miterlimit="4" stroke-dasharray="none" class="stroke-000000"></circle><circle cx="5.374" cy="295.115" r=".529" fill="none" fill-rule="evenodd" stroke="#05afe8" stroke-width=".5" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" class="stroke-000000"></circle></g></svg>        </a>
      </div>

      {/* Navigation icon section with an onClick event listener */}
      <div className="nav__icon" onClick={handleClick}>
        {/* Font Awesome icon for bars (hamburger menu) */}
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      {/* Unordered list for navigation links with 'active' class */}
      <ul className="nav__links active">
        {/* List item for the 'Home' link */}
        <li className="link">
          <a href="../Landing_Page/LandingPage.html">Home</a>
        </li>
        {/* List item for the 'Appointments' link */}
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        {/* List item for the 'Sign Up' link with a button */}
        <li className="link">
          <a href="/SignUp">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
        {/* List item for the 'Login' link with a button */}
        <li className="link">
          <a href="/Login">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
