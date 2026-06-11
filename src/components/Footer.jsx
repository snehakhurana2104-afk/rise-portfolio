import { FaBook, FaUsers, FaLink} from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className="footer-container"
        style={{ padding: '60px 40px', backgroundColor: '#0A1929',color: '#B0B0B0' }}>
        
            <div style={{ 
                backgroundColor: '#1E2A44',
                padding: '40px',
                borderRadius: '8px',
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '40px' 
            }}>
            <div>
             <h3 style={{ color: '#FFFFFF', display:'flex', alignItems:'center', gap:'10px'}}>
                <FaBook /> RISE
                </h3>
             <p style={{ lineHeight: '1.6' }}>Discover, Develop & Drive Forward with Strengths-Based Leadership. A comprehensive guide to unlocking your natural talents.
             </p>
            </div>
            
           <div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '15px'}}>
                    <FaLink /> Quicks Links</h4>
                <ul style={{ listStyle: 'none', padding: 0}}>
                    {['About the Book','Four Domains','About the Author','CliftonStrengths® Assessment'].map((item) => (
                        <li key={item} style={{ marginBottom: '10px', cursor: 'pointer'}}>
                          ➤ {item}  
                        </li>
                    ))}
                </ul>
                </div>
               
               <div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '15px'}}>
                    <FaUsers/> Connect</h4>
                <p>📧 contact@example.com</p>
                <p>🌐 SSDN Technologies</p>
              </div>
              </div>
         
          
           <hr style={{ borderColor: '#333', marginTop: '30px'}} />
           <p style={{ textAlign: 'center', fontSize: '12px'}}>
              © RISE - Strengths-Based Leadership. All rights reserved.<br />
              <br />
              ClitonStrength® and StrengthsFinder® are trademarks of Gallup, Inc. This book is an independent work not affiliated with Gallup, Inc.
           </p>
        </footer>
    );

}