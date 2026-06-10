import { Link } from 'react-router-dom';
import authorImage from '../assets/author.jpg';

export default function AboutAuthor() {
  const stats = [
    { label: '5,000+ Professionals Trained', icon: '🎓' },
    { label: '20+ Countries Visited', icon: '🌐' },
    { label: '22+ Years Experience', icon: '🎖️' },
    { label: 'CEO SSDN Technologies', icon: '👥' },
  ];

  return (
    <section style={{ 
      padding: '80px 20px', 
      backgroundColor: '#0a194f', 
      color: '#fff',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '42px', marginBottom: '50px', fontWeight: '700' }}>About The Author</h2>
        
        {/* Main Content */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
          <img src={authorImage} alt="Parveen Kumar Mehta" style={{ width: '400px', borderRadius: '15px', boxShadow: ' 0 10px 30px rgba(0,0,0,0.3)' }} />
          <div style={{ flex: 1, backgroundColor: '#1b3a82', padding: '40px', borderRadius: '15px', minWidth: '300px' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Parveen Kumar Mehta</h3>
            <p style={{ lineHeight: '1.6', fontSize: '16px', marginBottom: '20px' }}>Parveen Kumar Mehta is the CEO of SSDN Technologies, an IT training and consulting firm dedicated to upskilling employees and eempowering organizations to achieve sustainable success.</p>
            <p style={{ lineHeight: '1.8', fontSize: '16px', marginBottom: '20px'}}>With over 22 years of experience across roles as a System Administrator, Consultant, and Instructorn Parveen has trained over 5,000 professionals and traveled to more than 20 countries for delivering impactful, global learning experiences.</p>
            <p style={{ lineHeight: '1.8', fontSize:'16px'}}>Having started his career at just 19,Parveen's journey from a small village to leading an internationally recognized training organization has been fueled by a passion for people developement, strengths-based growth, and continuous learning.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          marginBottom: '60px',
          alignItems: 'stretch'
        }}>
          {stats.map((item, index) => (
            <Link 
              key={index} 
              to={`/strength/${item.label}`} 
              style={{ textDecoration: 'none' }}
              >
              <div 
              style={{
                backgroundColor: '#1b3a82', 
                padding: '25px', 
                borderRadius: '15px', 
                textAlign: 'center',
                border: '1px solid #2d4a96',
                cursor: 'pointer',
                transition: '0.4s',
                color: '#fff',
                minHeight: '180px',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '35px', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '15px', margin: 0, fontWeight: '500' }}>{item.label}</h4>
              </div>
            </Link>
          ))}
        </div>

        {/* Quote Box */}
        <div style={{ background: 'linear-gradient(135deg, #1b3a82, #4a148c)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.2)'}}>
          <p style={{ fontSize: '22px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>"People thrive when they know their strengths, and organizations succeed when they invest in developing those strengths. This book is my attempt to bridge the gap between awareness and application."</p>
        
          <p style={{ fontSize: '18px', fontWeight: '600' }}>- Parveen Kumar Mehta</p>
        </div>
      </div>
    </section>
  );
}