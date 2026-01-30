import "./App.css";
import {useState} from 'react';
import FAQComponent from './FAQComponent';
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
    <a href='/brochure.pdf'
    target='_blank' rel='noopener noreferrer'
    className='brochure-btn' style={{textDecoration: 'none', display: 'inline-block'}}>View Brochure</a>
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
    
    <FAQComponent />
    
   
    </div>
  );
}
export default App;