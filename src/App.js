import "./App.css";
function App(){
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/alchemy logo.webp" alt='logo'/>
        </div>
        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#events">Events</a>
          <a href="#guest">Guest lectures</a>
          <a href="#Workshops">Workshops</a>
          <a href="#accomodation">Accomodation</a>
          <a href="#faqs">FAQs</a>
        </div>
        <button className="login-btn">LOGIN</button>
      </nav>
      <section className="first">
        <h2 className='phrase'>Crude to Chemical</h2>
        <h1 className="title">ALCHEMY'26</h1>
    </section>
    <section className="fest-part">
      <h2 className="heading">Be a part of our <span>Fest!</span> </h2>
      <div className="content">
        <p className="text">
          From crude oil to life-saving medicines, from raw materials to revolutionary products—chemical engineering is the alchemy of the modern world. Be part of the transformation at Alchemy '26, where innovation meets tradition.
        </p>
        <div className="info">
          <div className="dtg">96 Days to go</div>
          <div className="edition"><p>10th Edition</p>
          <p>2026</p></div>
        </div>

      </div>
    </section>
    <section className='about'>
      <div className='content-box'>
        <div className='about-text'>
          <h2 className='heading'>ABOUT US</h2>
          <p className='description'>
            Alchemy '26 is a premier technical festival organized by the Department of Chemical Engineering, showcasing the transformative power of chemical sciences. Through workshops, guest lectures, competitions, and exhibitions, we provide a platform for students and professionals to explore innovations in catalysis, process engineering, sustainable chemistry, and emerging technologies that are reshaping our world.
          </p>
        </div>
        <div className='animation'>
          <p>3D ANIMATION</p>
        </div>
      </div>
    </section>
    </div>
  );
}
export default App;