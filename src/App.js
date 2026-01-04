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
    </div>
  );
}
export default App;