import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <section id="home" className="section">
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for all your needs.</p>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <p>We are a team of dedicated professionals providing top-notch services.</p>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>App Development</li>
        <li>Digital Marketing</li>
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Email: contact@example.com</p>
      <p>Phone: +123 456 7890</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Your Website. All Rights Reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
