import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={containerStyle}>
      {/* Left side: Branding */}
      <div style={brandingStyle}>
        <h1 style={{ fontSize: '5rem', margin: 0 }}>RISE</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>Welcome back.<br/>Let's grow together.</p>
      </div>

      {/* Right side: Form */}
      <div style={formWrapperStyle}>
        <div style={formBoxStyle}>
          <h2 style={{ marginBottom: '20px' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
          
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          
          {!isLogin && (
            <>
              <input type="email" placeholder="Email Address" style={inputStyle} />
              <input type="text" placeholder="City" style={inputStyle} />
            </>
          )}

          <button style={buttonStyle}>{isLogin ? 'Login' : 'Sign Up'}</button>
          
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            {isLogin ? "New to RISE? " : "Already have an account? "}
            <span 
              onClick={() => setIsLogin(!isLogin)} 
              style={{ color: '#037ffc', cursor: 'pointer', fontWeight: 'bold' }}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = { display: 'flex', minHeight: '100vh', background: '#f4f1ee', fontFamily: 'Arial, sans-serif' };
const brandingStyle = { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: '#e8dcd6' };
const formWrapperStyle = { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' };
const formBoxStyle = { width: '100%', maxWidth: '400px', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' };
const buttonStyle = { width: '100%', padding: '12px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' };