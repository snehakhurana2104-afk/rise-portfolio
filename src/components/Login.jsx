import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link import kiya

import './Login.css';
 // Wahi CSS jo aap pehle use kar rahe the

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === loginData.email && savedUser.password === loginData.password) {
      
      navigate('/home'); 
    } else {
      alert('Invalid Email or Password!');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        <input 
          className="input-field" 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setLoginData({...loginData, email: e.target.value})} 
          required 
        />
        
        <input 
          className="input-field" 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
          required 
        />
        
        <button className="submit-btn" type="submit">Login</button>
        
        {/* Aapka naya design wala link */}
        
<div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
  Don't have an account? <Link to="/signup" style={{ color: '#007bff' }}>Sign up</Link>
</div>
      </form>
    </div>
  );
};

export default Login;