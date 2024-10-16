import React, { useState } from 'react';
import './Sign_Up.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config'; // Ensure you have API_URL defined in your config

const SignUp = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  // State for errors and success messages
  const [errors, setErrors] = useState({});
  const [showerr, setShowerr] = useState(''); // Error state for API errors
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    let newErrors = {};
    const { name, phone, email, password } = formData;

    // Check for empty fields
    if (!name) newErrors.name = "Name is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    
    // Validate phone number length
    if (phone && phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      newErrors.email = "Email format is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const json = await response.json();
            console.log("API Response:", json); // Log the response to inspect its structure

            if (json.authtoken) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', formData.name);
                sessionStorage.setItem('phone', formData.phone);
                sessionStorage.setItem('email', formData.email);
                navigate('/');
                window.location.reload();
            } else {
                // Handle API errors (array of errors)
                if (json.errors && Array.isArray(json.errors)) {
                    const errorMsg = json.errors.map(err => err.msg).join(', '); // Extract the msg property
                    setShowerr(errorMsg); // Set error message to show
                } else {
                    setShowerr(json.error || 'An unexpected error occurred.');
                }
            }
        } catch (error) {
            setShowerr('Failed to connect to the server. Please try again later.');
        }
    }
};



  
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
          <div className="signup-text1">
            Already a member? <span><a href="/Login" style={{ color: '#2190FF' }}>Login</a></span>
          </div>
        </div>
        
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            {/* Display API error message */}
            {showerr && <div style={{ color: 'red', marginBottom: '10px' }}>{showerr}</div>}

            <center>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ name: '', phone: '', email: '', password: '' })}>Reset</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
