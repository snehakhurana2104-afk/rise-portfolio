import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Data ko localStorage mein save karein
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Account created successfully!');
    navigate('/login'); // Signup ke baad Login page par bhej dein
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        
        <input className="input-field" type="text" placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        
        <input className="input-field" type="email" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        
        <input className="input-field" type="password" placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        
        <button className="submit-btn" type="submit">Register</button>
        
        <div className="form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;