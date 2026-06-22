import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Domains() {
    const [activeTab, setActiveTab] = useState('Relationship');

    // Muted premium palette suited for executive corporate dashboards
    const data = {
        'Relationship': {
            color: '#4F46E5', // Indigo
            title: 'Relationship Building',
            desc: 'The glue that holds teams together. People with these strengths create trust, foster inclusion, and elevate group morale through emotional intelligence.',
            quote: '"When people feel valued, they return. When they feel connected, they contribute."',
            themes: ['Adaptability', 'Connectedness', 'Developer', 'Empathy', 'Harmony', 'Includer', 'Individualization', 'Positivity', 'Relator']
        },
        'Influcing': {
            color: '#D97706', // Amber
            title: 'Influencing',
            desc: 'Natural persuaders, energizers, and leaders who know how to take charge, speak up, and make sure the team is heard - especially when stakes are high.',
            quote: '"Without Influencing strengths, a team may have good ideas and solid execution - but lack the courage to bring them to life."',
            themes: ['Activator', 'Command', 'Communication', 'Competition', 'Maximizer', 'Self-Assurance', 'Significance', 'Woo']
        },
        'Strategic Thinking': {
            color: '#059669', // Emerald Green
            title: 'Strategic Thinking',
            desc: 'Thinkers, visionaries, and ideas generators who keep teams future-focused, absorb information, and generate insights that lead to smarter decisions.',
            quote: '"These individuals challenge assumptions, inspire new ideas, and help shape strategies that lead to high performance."',
            themes: ['Analytical', 'Context', 'Futuristic', 'Ideation', 'Input', 'Intellection', 'Learner', 'Strategic']
        },
        'Executing': {
            color: '#7C3AED', // Purple
            title: 'Executing',
            desc: 'The doers who turn ideas into action and plans into results. They bring discipline, drive, and a relentless focus on outcomes that deliver.',
            quote: '"When others are brainstorming, these individuals are already moving forward - ensuring the team does not just talk, it delivers."',
            themes: ['Achiever', 'Arranger', 'Belief', 'Consistency', 'Deliberative', 'Discipline', 'Focus', 'Responsibility', 'Restorative']
        }
    };

    return (
        <section className='domains-content-box' style={{ 
            padding: '80px 24px', 
            maxWidth: '1100px', 
            margin: '0 auto', 
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            {/* Header with strong dark typography */}
            <h2 style={{ 
                textAlign: 'center', 
                fontSize: '40px', 
                fontWeight: '850', 
                marginBottom: '48px', 
                color: '#0F172A', 
                letterSpacing: '-0.02em'
            }}>
                The Four Domains
            </h2>

            {/* Light Mode Unified Dock Container */}
            <div style={{ 
                display: 'flex', 
                gap: '8px', 
                justifyContent: 'center', 
                marginBottom: '48px', 
                flexWrap: 'wrap',
                backgroundColor: '#F1F5F9', 
                padding: '6px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                width: 'fit-content',
                margin: '0 auto 48px auto'
            }}>
                {Object.keys(data).map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab)} 
                            style={{ 
                                padding: '10px 24px', 
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer', 
                                fontWeight: '600', 
                                fontSize: '15px',
                                transition: 'all 0.2s ease',
                                backgroundColor: isActive ? data[tab].color : 'transparent',
                                color: isActive ? '#FFFFFF' : '#64748B', 
                                boxShadow: isActive ? `0 4px 12px rgba(0,0,0,0.1)` : 'none'
                            }}
                            onMouseOver={(e) => {
                                if(!isActive) e.currentTarget.style.color = '#0F172A';
                            }}
                            onMouseOut={(e) => {
                                if(!isActive) e.currentTarget.style.color = '#64748B';
                            }}
                        >
                            {tab === 'Influcing' ? 'Influencing' : tab}
                        </button>
                    );
                })}
            </div>

            {/* Premium Light Content Display Card */}
            <div style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '48px', 
                borderRadius: '20px', 
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)', 
                position: 'relative'
            }}>
                {/* Left accent color bar */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '48px',
                    bottom: '48px',
                    width: '4px',
                    backgroundColor: data[activeTab].color,
                    borderRadius: '0 4px 4px 0'
                }} />

                <h2 style={{ 
                    fontSize: '32px', 
                    fontWeight: '800',
                    color: '#0F172A', 
                    marginBottom: '16px',
                    letterSpacing: '-0.01em'
                }}>
                    {data[activeTab].title}
                </h2>

                <p style={{ 
                    fontSize: '17px', 
                    color: '#475569', 
                    lineHeight: '1.7', 
                    marginBottom: '32px',
                    fontWeight: '400'
                }}>
                    {data[activeTab].desc}
                </p>

                {/* Refined light blockquote section */}
                <div style={{ 
                    fontStyle: 'italic', 
                    color: '#334155', 
                    borderLeft: `3px solid ${data[activeTab].color}`, 
                    paddingLeft: '20px', 
                    fontSize: '16px', 
                    marginBottom: '40px',
                    lineHeight: '1.6',
                    backgroundColor: '#F8FAFC', 
                    padding: '16px 20px',
                    borderRadius: '0 8px 8px 0'
                }}>
                    {data[activeTab].quote}
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '32px 0' }} />

                {/* Sub-grid with crisp light-themed cards */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                    gap: '16px' 
                }}>
                    {data[activeTab].themes.map((theme, i) => (
                        <Link key={i} to={`/strength/${theme}`} style={{ textDecoration: 'none' }}>
                            <div style={{ 
                                padding: '14px', 
                                border: '1px solid #E2E8F0',
                                borderRadius: '10px',
                                textAlign: 'center',
                                fontSize: '14px', 
                                fontWeight: '600',
                                color: '#334155', 
                                backgroundColor: '#F8FAFC', 
                                cursor: 'pointer',
                                transition: 'all 0.2s ease-in-out'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = data[activeTab].color;
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = data[activeTab].color;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 6px 16px rgba(15, 23, 42, 0.05)`;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = '#E2E8F0';
                                e.currentTarget.style.backgroundColor = '#F8FAFC';
                                e.currentTarget.style.color = '#334155';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                {theme}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}