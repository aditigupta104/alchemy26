import "./App.css";
import ThreeAnimation from './ThreeAnimation';
import {useState} from 'react';
function App(){
  const [menuOpen, setMenuOpen]=useState(false);
  const [openFaq, setOpenFaq]=useState(false);
  const toggleFaq=(index)=>{setOpenFaq(openFaq===index?null : index);}
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/alchemy logo.webp" alt='logo'/>
        </div>
  <button className='burger-btn' onClick={()=>setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </button>
        <div className={`nav-menu ${menuOpen ? 'active': ''}`}>
          <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          <a href="#about-section" onClick={()=>setMenuOpen(false)}>About Us</a>
          <a href="#events" onClick={()=>setMenuOpen(false)}>Events</a>
          <a href="#events" onClick={()=>setMenuOpen(false)}>Guest lectures</a>
          <a href="#events" onClick={()=>setMenuOpen(false)}>Workshops</a>
          <a href="#events" onClick={()=>setMenuOpen(false)}>Accomodation</a>
          <a href="#events" onClick={()=>setMenuOpen(false)}>FAQs</a>
        </div>
        
      </nav>
      <section className="first" id="home">
        <h2 className='phrase'>Crude to Chemical</h2>
        <h1 className="title">ALCHEMY'26</h1>
    </section>
    <section className="fest-part" id="home">
      <h2 className="heading">Be a part of our <span>Fest!</span> </h2>
      <div className="content">
        <p className="text">
          From crude oil to life-saving medicines, from raw materials to revolutionary products—chemical engineering is the alchemy of the modern world. Be part of the transformation at Alchemy '26, where innovation meets tradition.
        </p>
        <div className="info">
          <div className="dtg">96 Days to go</div>
    <a href='/brochure.pdf' download='Alchemy26-Brochure.pdf' className='brochure-btn' style={{textDecoration: 'none', display: 'inline-block'}}>Download Brochure</a>
          <div className="edition"><p>10th Edition</p>
          <p>2026</p></div>
        </div>

      </div>
    </section>
    <section className='about' id="about-section">
      <div className='content-box'>
        <div className='about-text'>
          <h2 className='heading'>ABOUT US</h2>
          <p className='description'>
            Alchemy '26 is a premier technical festival organized by the Department of Chemical Engineering, showcasing the transformative power of chemical sciences. Through workshops, guest lectures, competitions, and exhibitions, we provide a platform for students and professionals to explore innovations in catalysis, process engineering, sustainable chemistry, and emerging technologies that are reshaping our world.
          </p>
        </div>
        <div className='animation'>
          <ThreeAnimation/>
        </div>
      </div>
    </section>
    
   <section className='faq-section' id='faqs'>
  <h2 className='faq-heading'>FAQs</h2>
  <div className='faq-container'>
    
    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(0)}>
        <span>What is Alchemy'26?</span>
        <span className={`faq-arrow ${openFaq===0?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===0?'show':''}`}>It is the 10th edition of our annual chemical engineering symposium.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(1)}>
        <span>When is the event happening?</span>
        <span className={`faq-arrow ${openFaq===1?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===1?'show':''}`}>The event will take place in March 2026.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(2)}>
        <span>How can I register for events?</span>
        <span className={`faq-arrow ${openFaq===2?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===2?'show':''}`}>Click the Register Now button on each event card.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(3)}>
        <span>Is there any registration fee?</span>
        <span className={`faq-arrow ${openFaq===3?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===3?'show':''}`}>Registration fees vary by event. Check individual event details.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(4)}>
        <span>Can students from other colleges participate?</span>
        <span className={`faq-arrow ${openFaq===4?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===4?'show':''}`}>Yes! Alchemy '26 is open to all college students.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(5)}>
        <span>Will accommodation be provided?</span>
        <span className={`faq-arrow ${openFaq===5?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===5?'show':''}`}>Yes, accommodation will be available for outstation participants.</div>
    </div>

  </div>
</section>
    </div>
  );
}
export default App;