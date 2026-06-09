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
            color: '#0e5202',
            title: 'Strategic Thinking',
            desc: 'Thinkers, visionaries, and ideas generators who keep teams future-focused, absorb information, and generate insights that lead to smarter decisions.',
            quote: '"These individuals challenge assumptions, inspire new ideas, and help shape strategies that lead to high performance."',
            themes: ['Analytical', 'Context', 'Futuristic', 'Ideation', 'Input', 'Intellection', 'Learner', 'Strategic']
        },
        'Executing': {
            color: '#3a0463',
            title: 'Executing',
            desc: 'The doers who turn ideas into action and plans into results. They bring discipline, drive, and a relentless focus on outcomes that deliver.',
            quote: '"When others are brainstorming, these individuals are already moving forward - ensuring the team does not just talk, it delivers."',
            themes: ['Achiever', 'Arranger', 'Belief', 'Consistency', 'Deliberative', 'Discipline', 'Focus', 'Responsibility', 'Restorative']
        }
    };

    return (
        <section style={{ padding: '60px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                {Object.keys(data).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '12px 25px', borderRadius: '25px', border: 'none', backgroundColor: activeTab === tab ? data[tab].color : '#f0ecec', color: activeTab === tab ? '#fff' : '#000', cursor: 'pointer', fontWeight: '600' }}>
                        {tab}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '36px', color: '#1a1a2e' }}>{data[activeTab].title}</h2>
                <p style={{ lineHeight: '1.6', color: 'black', margin: '20px 0' }}>{data[activeTab].desc}</p>
                <p style={{ fontStyle: 'italic', color: 'black', borderLeft: `4px solid ${data[activeTab].color}`, paddingLeft: '15px' }}>{data[activeTab].quote}</p>
                <hr />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {data[activeTab].themes.map((theme, i) => (
                    <Link key={i} to={`/strength/${theme}`} style={{ textDecoration: 'none' }}>
                        <div style={{ padding: '10px', backgroundColor: data[activeTab].color, color: '#fff', borderRadius: '8px', textAlign: 'center', fontSize: '13px', cursor: 'pointer' }}>
                            {theme}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}