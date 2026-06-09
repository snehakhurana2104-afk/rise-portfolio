import BookImage from '../assets/Book.jpg'



export default function AboutBook() {

    return (

        <section style={{

            display:'flex',

            gap:'80px',

            padding: '80px 60px',

            alignItems: 'center',

            maxWidth: '1200px',

            margin: '0 auto',
            

        }}>

            <div style={{

                flex: '0 0 400px',

                position: 'relative',

                borderRadius: '40px',

                overflow: 'hidden',

                height: '600px',

                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'

            }}>

                <img

                src={BookImage}

                alt="Book"

                style={{

                    width:'100%',

                    height:'100%',

                    objectFit:'cover',


                }}></img>

                <div style={{

                    position:'absolute',

                    bottom:'-45px',

                    

                    left:'10px',

                    backgroundColor: 'rgba(255, 255, 255, 0.95)',

                    padding: '20px',

                    borderRadius: '25px',

                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'

                }}>

                    <h3 style={{ margin: '0 0 10px 0', fontSize: '25px', fontWeight:'700'}}> 📖 RISE</h3>

                    <p style={{ margin: '0', fontsize: '15px', color: '#444', lineHeight: '1.6'}}>

                       Discover, develop & Drive Forward with Strengths-Based Leadership

                    </p>

                    <p style={{ margin: '8px 0 0 0 ', fontsize: '13px', color:' #888'}}>

                        By Parveen Kumar Mehta

                    </p>

                </div>  

                </div>

     
       <div style = {{ flex: 1, paddingLeft: '20px'}}>
         <h2 style={{ fontSize: '42px', lineHeight: '1.2', marginBottom: '25px', color: '#1a1a1a'}}>
            A Philosophy for Personal & Collective Growth
         </h2>
        <p style={{ fontSize: '18px', color:'#666',  marginBottom: '30px'}}>
            "You cannot be anything you want to be-but you can a lot more of who you already are."
        </p>
        <p style={{ fontSize: '18px', color: '#333', marginBottom: '30px'}}>
            RISE challenges  the traditional notion that being well-rounded is the key to success.
            Instead,it encourages you to become well-rooted-grounded deeply in your natural talents and strengths.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap:'15px'}}>
            {[
                'Discover your natural talents',
                'Transform talents into actionable strengths',
                'Overcome internal and external barriers',
                'Build high-performing teams with complementary strengths',
                'align personal strengths with professional roles',
                'Practical exercises and built-in workbook'
            ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <span style={{ color: '#28a745', fontSize: '20px', fontWeight: 'bold'}}>✓</span>
                    <span style={{ fontSize: '16px', color: '#333'}}>{text}</span>
                </div>
            ))}
            </div>

            <div style={{ marginTop:'40px', display: 'flex', gap: '20px'}}>
                <a 
                href='https://www.amazon.in/RISE-Discover-Develop-Strengths-Based-Leadership-ebook/dp/B0FTJCWHG2'
                target='_blank'
                style={{ textDecoration: 'none'}}
                >
                    <button style={{
                        padding: '15px 30px',
                        borderRadius:'10px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        cursor:'pointer'
                    }}>
                        Purchase The Book
                    </button>
                </a>
                <button style={{ padding: '15px 30px', borderRadius:'10px', border:'1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer'}}>
                    Take The Assessment
                </button>
        </div>
       </div>
       
    

            

        </section>

    )

}