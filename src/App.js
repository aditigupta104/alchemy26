import "./App.css";
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
  <div className={`burger ${menuOpen ? "active" : ""}`}
  onClick={()=> setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
   <div className={`nav-links ${menuOpen ? 'open' : ""}`}>
          <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          <a href="#about-section" onClick={()=>setMenuOpen(false)}>About Us</a>
          <a href="#faqs" onClick={()=>setMenuOpen(false)}>FAQs</a>
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
          
        </div>
      </div>
    </section>
    
   <section className='faq-section' id='faqs'>
  <h2 className='faq-heading'>FAQs</h2>
  <div className='faq-container'>
    
    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(0)}>
        <span>What are the necessary documents to be brought?</span>
        <span className={`faq-arrow ${openFaq===0?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===0?'show':''}`}>It is mandatory to bring your college ID card. For accommodation, a payment screenshot should be in hand.
</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(1)}>
        <span>When will i get my caution deposit back?</span>
        <span className={`faq-arrow ${openFaq===1?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===1?'show':''}`}>The caution deposit shall be refunded at the time of vacating, provided there is no overstay or damage to the room or any other college property.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(2)}>
        <span>Can i vacate earlier than the registered date?</span>
        <span className={`faq-arrow ${openFaq===2?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===2?'show':''}`}>Yes, but the money paid for the extra day(s) will not be refunded.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(3)}>
        <span>Does workshop registration entitle accomodation as well?</span>
        <span className={`faq-arrow ${openFaq===3?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===3?'show':''}`}>No, you need to register separately for PR and accommodation.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(4)}>
        <span>Can i cancel accommodation after registering?</span>
        <span className={`faq-arrow ${openFaq===4?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===4?'show':''}`}>Yes, but there will be no refunds.</div>
    </div>

    <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(5)}>
        <span>Are the registration and hospitality fees per person or per team?</span>
        <span className={`faq-arrow ${openFaq===5?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===5?'show':''}`}>The registration and hospitality fees are considered per person individually.</div>
    </div>
 <div className='faq-item'>
      <div className='faq-ques' onClick={()=> toggleFaq(6)}>
        <span>Do event participants get certificates?</span>
        <span className={`faq-arrow ${openFaq===6?'open':''}`}>▼</span>
      </div>
      <div className={`faq-ans ${openFaq===6?'show':''}`}>Yes, and winners are assured to get cash prizes.</div>
    </div>
  </div>
</section>
    </div>
  );
}
export default App;