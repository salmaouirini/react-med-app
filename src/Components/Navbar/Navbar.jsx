import React, { useState } from 'react';
import './Navbar.css';  // Import the CSS file
import { useNavigate, Link } from 'react-router-dom';
import ProfileCard from '../ProfileCard/ProfileCard';


const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewReports, setViewReports] = useState(false);


  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('auth-token'); // Remove token from session storage
    sessionStorage.removeItem('name'); // Remove name from session storage
    sessionStorage.removeItem('phone'); // Remove phone from session storage
    sessionStorage.removeItem('email'); // Remove email from session storage
    navigate('/Login'); // Redirect to login page after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleViewReports = () => {
    setViewReports(!viewReports);
  };

  // Check if user is logged in
  const isLoggedIn = !!sessionStorage.getItem('auth-token');
  
  const email = sessionStorage.getItem('email');
  const phone = sessionStorage.getItem('phone');
  const name = sessionStorage.getItem('name'); // Get name from session storage
  const username = name ? name.split('@')[0] : 'User'; // Get name before '@'

  const handleClick = () => {
    // Functionality for toggling the navbar (e.g., showing/hiding on mobile)
  };

  return (
    <nav>
      {/* Navigation logo section */}
      <div className="nav__logo">
        <a href="/">
          StayHealthy
          <svg viewBox="0 0 8.467 8.467" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 -288.533)">
              <path d="M4.3 293.32a3.253 3.253 0 0 0-3.233 2.907H7.53a3.253 3.253 0 0 0-3.23-2.906z" fill="none" fillRule="evenodd" stroke="#05afe8" strokeWidth="1" strokeMiterlimit="4" />
              <path d="M3.001 294.945v.318M2.823 295.115h-.405s-.19-.983.346-1.293M3.585 294.945v.318" fill="none" stroke="#05afe8" strokeWidth=".5" />
              <path d="M3.763 295.115h.406s.19-1.332-.347-1.641" fill="none" stroke="#05afe8" strokeWidth=".40000001" />
              <path d="M5.394 293.691v.868" fill="none" stroke="#05afe8" strokeWidth=".5" />
              <circle cx="4.298" cy="291.188" r="2.014" fill="none" stroke="#05afe8" strokeWidth="1" />
              <circle cx="5.374" cy="295.115" r=".529" fill="none" stroke="#05afe8" strokeWidth=".5" />
            </g>
          </svg>
        </a>
      </div>

      {/* Navigation icon section with an onClick event listener */}
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      {/* Unordered list for navigation links */}
      <ul className="nav__links active">
        {isLoggedIn ? (
          <>
            <li>
                <Link to="/ReviewForm" >
                    Review
                </Link>
            </li>
            {/* Display the user's name and logout button */}
            <li className="profile-dropdown">
                <span onClick={toggleDropdown}>Welcome, {username}</span>
                {dropdownOpen && (
                <div className="dropdown-content">
                    <button>
                        <Link to='/ProfileCard'>
                            Your Profile
                        </Link>
                    </button>
                  <button >
                    <Link onClick={toggleViewReports} to='/ReportsLayout'>Your Reports</Link>
                    </button>
                </div>
              )}
            </li>
            <li className="link">
              <button className="btn1" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            {/* Links for unauthenticated users */}
            <li className="link">
              <a href="/SignUp">
                <button className="btn1">Sign Up</button>
              </a>
            </li>
            <li className="link">
              <a href="/Login">
                <button className="btn1">Login</button>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
