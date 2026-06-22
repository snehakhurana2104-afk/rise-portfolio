import { Link } from 'react-router-dom';
import authorImage from '../assets/author.jpg';
import './AboutAuthor.css';

export default function AboutAuthor() {
  const stats = [
    { label: '5,000+ Professionals Trained', icon: '🎓' },
    { label: '20+ Countries Visited', icon: '🌐' },
    { label: '22+ Years Experience', icon: '🎖️' },
    { label: 'CEO SSDN Technologies', icon: '👥' },
  ];

  return (
    <section className="about-author-container"
      style={{ 
        padding: '100px 24px', 
        backgroundColor: '#F8FAFC', // Crisp soft off-white background
        color: '#0F172A', // Deep slate for rich readability
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Main Section Header */}
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '40px', 
          marginBottom: '64px', 
          fontWeight: '850',
          letterSpacing: '-0.02em',
          color: '#0F172A'
        }}>
          About The Author
        </h2>
        
        {/* Main Split Profile Layout */}
        <div style={{ 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'stretch', 
          flexWrap: 'wrap', 
          marginBottom: '64px' 
        }}>
          {/* Left Side: Photo Container */}
          <div style={{ 
            flex: '1 1 380px', 
            display: 'flex', 
            justifyContent: 'center' 
          }}>
            <img 
              src={authorImage} 
              alt="Parveen Kumar Mehta" 
              style={{ 
                width: '100%', 
                maxWidth: '420px', 
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '20px', 
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
                border: '1px solid #E2E8F0'
              }} 
            />
          </div>

          {/* Right Side: Clean Bio Card */}
          <div style={{ 
            flex: '1 1 450px', 
            backgroundColor: '#FFFFFF', 
            padding: '48px', 
            borderRadius: '20px', 
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: '800', 
              marginBottom: '24px',
              color: '#0F172A',
              letterSpacing: '-0.01em'
            }}>
              Parveen Kumar Mehta
            </h3>
            
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginBottom: '20px', color: '#334155' }}>
              Parveen Kumar Mehta is the CEO of SSDN Technologies, an IT training and consulting firm dedicated to upskilling employees and empowering organizations to achieve sustainable success.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '16px', marginBottom: '20px', color: '#475569' }}>
              With over 22 years of experience across roles as a System Administrator, Consultant, and Instructor, Parveen has trained over 5,000 professionals and traveled to more than 20 countries for delivering impactful, global learning experiences.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '16px', color: '#475569', margin: 0 }}>
              Having started his career at just 19, Parveen's journey from a small village to leading an internationally recognized training organization has been fueled by a passion for people development, strengths-based growth, and continuous learning.
            </p>
          </div>
        </div>

        {/* Stats Redesigned as Minimal Executive Widgets */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px', 
          marginBottom: '64px'
        }}>
          {stats.map((item, index) => (
            <Link 
              key={index} 
              to={`/strength/${encodeURIComponent(item.label)}`} 
              style={{ textDecoration: 'none' }}
            >
              <div 
                style={{
                  backgroundColor: '#FFFFFF', 
                  padding: '32px 24px', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  border: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease-in-out',
                  color: '#0F172A',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(15, 23, 42, 0.01)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#4F46E5'; // Subtle primary color active border
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(15, 23, 42, 0.01)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '15px', margin: 0, fontWeight: '600', color: '#334155', lineHeight: '1.4' }}>{item.label}</h4>
              </div>
            </Link>
          ))}
        </div>

        {/* Elegant Premium Quote Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #F8FAFC, #EEF2F6)', 
          padding: '48px', 
          borderRadius: '20px', 
          textAlign: 'center', 
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.02)'
        }}>
          <p style={{ 
            fontSize: '20px', 
            fontStyle: 'italic', 
            lineHeight: '1.7', 
            marginBottom: '24px', 
            color: '#1E293B',
            fontWeight: '500',
            maxWidth: '850px',
            margin: '0 auto 24px auto'
          }}>
            "People thrive when they know their strengths, and organizations succeed when they invest in developing those strengths. This book is my attempt to bridge the gap between awareness and application."
          </p>
          <p style={{ fontSize: '16px', fontWeight: '700', color: '#4F46E5', margin: 0, letterSpacing: '0.05em' }}>
            — PARVEEN KUMAR MEHTA
          </p>
        </div>

      </div>
    </section>
  );
}