import { FaBook, FaUsers, FaLink} from 'react-icons/fa';
export default function Footer() {
    return (
        <footer style={{ padding: '60px 40px', backgroundColor: '#0A1929',color: '#B0B0B0' }}>
        
            <div style={{ 
                backgroundColor: '#1E2A44',
                padding: '30px',
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', // Ye 3 barabar column banata hai
                gap: '40px' 
            }}>
            <div>
             <h3 style={{ color: '#FFFFFF', display:'flex', alignItems:'center', gap:'10px'}}>
                <FaBook /> RISE
                </h3>
             <p>Discover, Develop & Drive Forward with Strengths-Based Leadership. A comprehensive guide to unlocking your natural talents.
             </p>
            </div>
            
           <div>
                <h4 style={{ color: '#FFFFFF'}}>
                    <FaLink /> Quicks Links</h4>
                <ul style={{ listStyle: 'none', padding: 0}}>
                    <li>About the Book</li>
                    <li>Four Domains</li>
                    <li>About the Author</li>
                    <li>CliftonStrengths® Assessment</li>
                </ul>
                </div>
               
               <div>
                <h4 style={{ color: '#FFFFFF'}}>
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