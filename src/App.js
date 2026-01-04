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
    </div>
  );
}
export default App;