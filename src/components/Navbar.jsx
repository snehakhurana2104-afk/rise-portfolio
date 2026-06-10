import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#0a194f', 
      padding: '15px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
        RISE
      </div>
      <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>About</Link>
        <Link to="/domains" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Domains</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
      </div>
    </nav>
  );
}