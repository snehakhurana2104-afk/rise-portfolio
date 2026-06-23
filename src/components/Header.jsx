import HandshakeImage from '../assets/Handshake.jpg';
import './Header.css';

export default function Header() {
    return (
        <section className="hero-section"
        style={{
            height: '85vh',
            // Ek premium subtle dark blue gradient overlay jo image ke contrast ko behtar karega
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 60%, transparent 100%), url(${HandshakeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#E2E8F0', // Soft slate gray prose ke liye
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 80px', // Extra breathing room left-right mein
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            {/* Minimal Upper Tag */}
            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 16px',
                borderRadius: '100px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#818CF8',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.05em',
                marginBottom: '24px'
            }}>
                ✨ DISCOVER YOUR STRENGTHS
            </div>

            {/* Main Brand Title with Subtle Depth */}
            <h1 style={{ 
                fontSize: '40px', 
                margin: '0 0 12px 0', 
                color: '#FFFFFF', 
                fontWeight: '900',
                letterSpacing: '-0.04em',
                lineHeight: '1.1'
            }}>
                RISE
            </h1>

            {/* Sleek Subheading */}
            <h2 style={{ 
                fontSize: '20px', 
                margin: '0 0 20px 0', 
                maxWidth: '650px', 
                fontWeight: '700',
                color: '#F8FAFC',
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
            }}>
                Discover, Develop & Drive Forward with Strengths-Based Leadership
            </h2>

            {/* Clean Description text */}
            <p style={{ 
                maxWidth: '580px',
                fontSize: '16px', 
                marginBottom: '40px', 
                color: '#CBD5E1', // Muted slate for professional look
                lineHeight: '1.6',
                fontWeight: '400'
            }}>
                Unlock your natural talents through the CliftonStrengths® framework. 
                Transform your approach to personal growth and leadership by focusing on what you do best.
            </p>

            {/* High-End Executive Buttons */}
            <div className='button-container' style={{ display: 'flex', gap: '16px' }}>
                {/* Primary Premium Indigo Button */}
                <button style={{
                    padding: '14px 28px',
                    backgroundColor: '#4F46E5', // Royal Indigo
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.4)',
                    transition: 'all 0.2s ease'
                }}>
                    Explore The Book 
                </button>

                {/* Secondary Borderless Minimal Button */}
                <button style={{
                    padding: '14px 28px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#F1F5F9',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.2s ease'
                }}>
                    Learn More
                </button>
            </div>
        </section>
    )
}