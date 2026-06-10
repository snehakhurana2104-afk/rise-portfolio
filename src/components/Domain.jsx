import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Domains() {
    const [activeTab, setActiveTab] = useState('Relationship');

    const data = {
        'Relationship': {
            color: '#037ffc',
            title: 'Relationship Building',
            desc: 'The glue that holds teams together. People with these strengths create trust, foster inclusion, and elevate group morale through emotional intelligence.',
            quote: '"When people feel valued, they return. When they feel connected, they contribute."',
            themes: ['Adaptability', 'Connectedness', 'Developer', 'Empathy', 'Harmony', 'Includer', 'Individualization', 'Positivity', 'Relator']
        },
        'Influcing': {
            color: '#fc9003',
            title: 'Influencing',
            desc: 'Natural persuaders, energizers, and leaders who know how to take charge, speak up, and make sure the team is heard - especially when stakes are high.',
            quote: '"Without Influencing strengths, a team may have good ideas and solid execution - but lack the courage to bring them to life."',
            themes: ['Activator', 'Command', 'Communication', 'Competition', 'Maximizer', 'Self-Assurance', 'Significance', 'Woo']
        },
        'Strategic Thinking': {
            color: '#2d8a25',
            title: 'Strategic Thinking',
            desc: 'Thinkers, visionaries, and ideas generators who keep teams future-focused, absorb information, and generate insights that lead to smarter decisions.',
            quote: '"These individuals challenge assumptions, inspire new ideas, and help shape strategies that lead to high performance."',
            themes: ['Analytical', 'Context', 'Futuristic', 'Ideation', 'Input', 'Intellection', 'Learner', 'Strategic']
        },
        'Executing': {
            color: '#5e1796',
            title: 'Executing',
            desc: 'The doers who turn ideas into action and plans into results. They bring discipline, drive, and a relentless focus on outcomes that deliver.',
            quote: '"When others are brainstorming, these individuals are already moving forward - ensuring the team does not just talk, it delivers."',
            themes: ['Achiever', 'Arranger', 'Belief', 'Consistency', 'Deliberative', 'Discipline', 'Focus', 'Responsibility', 'Restorative']
        }
    };

    return (
        <section className='domains-content-box'
         style={{ padding: '40px 15px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2 style={{ textAlign: 'center', fontSize: '42px', marginBottom: '50px', color:'#1a1a2e'}}>The Four Domains</h2>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '50px', flexWrap: 'wrap' }}>
                {Object.keys(data).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} 
                    style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontWeight: '600', transition: '0.3s',
                     backgroundColor: activeTab === tab ? data[tab].color : '#e0e0e0',
                      color: activeTab === tab ? '#fff' : '#444',
                      boxShadow: activeTab === tab ? '0 4px 15px rgba(0,0,0,0.15)': 'none' }}>
                        {tab}
                    </button>
                ))}
            </div>

            <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}>
                <h2 style={{ fontSize: '36px', color: data[activeTab].color, marginBottom: '20px' }}>{data[activeTab].title}</h2>
                <p style={{ fontSize: '18px', color: '#444',lineHeight: '1.8', margin: '25px' }}>{data[activeTab].desc}</p>
                <p style={{ fontStyle: 'italic', color: '#222', borderLeft: `5px solid ${data[activeTab].color}`, paddingLeft: '20px', fontSize:'18px', marginBottom: '30px' }}>{data[activeTab].quote}</p>
                <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '30px '}} />
               
    

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
                {data[activeTab].themes.map((theme, i) => (
                    <Link key={i} to={`/strength/${theme}`} style={{ textDecoration: 'none' }}>
                        <div style={{ padding: '15px', 
                         border: `1px solid ${data[activeTab].color}`,
                          color: data[activeTab].color,
                           borderRadius: '10px',
                            textAlign: 'center',
                             fontSize: '15px', 
                             fontWeight: '600',
                              transition: '0.3s all ease-in-out',
                              backgroundColor: data[activeTab].color,
                              color: '#fff',
                              border:'none',
                              cursor: 'pointer',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.filter = 'brightness(90%)',
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.filter = 'brightness(100)%';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
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