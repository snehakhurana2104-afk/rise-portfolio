import HandshakeImage from '../assets/Handshake.jpg';
export default function Header() {
    return (
        <section style={{
            height: '80vh',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HandshakeImage})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            color:'lightgrey',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'flex-start',
            padding: '0 40px',

        }}>
            <h1 style={{ fontSize: '64px', margin: '0 0 20px 0', color: '#FFFFFF', fontWeight: '800'}}>RISE</h1>
            <h2 style={{ fontSize: '32px', margin: '10px 0', maxWidth: '600px', fontWeight: '600'}}>
                Discover,Develop & Drive Forward with Strengths-Based Leadership
            </h2>
            <p style={{ maxWidth: '600px',fontSize: '18px', marginBottom: '30px', }}>
                Unlock your natural talents through the CliftonStrengths® framework. 
                Transform your approach to personal growth and leadership by focusing on what you do best.
            </p>
            <div className='button-container'
            style={{ display: 'flex', gap: '20px'}}>
                <button style={{
                    padding:'12px 24px',
                    backgroundColor: '#007BFF',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Explore The Book 

                </button>
                <button style={{
                    padding: '12px 24px',
                    backgroundColor: 'lightgrey',
                    border: '1px solid #fff',
                    borderRadius:'5px',
                    cursor:'pointer',
                }}>
                    Learn More
                </button>
            </div>
        </section>
    )
}