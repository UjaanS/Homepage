import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Farmer Aid</h1> 
        <ul className="nav-links">
          <li><a href="#services"><Dropdown/></a></li>
          <li><a href="https://homepage-ofdz.vercel.app/">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h2>Farmer Aid</h2>
        <p className="subheading">Every Farmer's Friend</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Mental Health Support</h3>
          <p>A farmers friend, companion, and personalized AI therapist</p>
        </div>
        <div className="service-item">
          <h3>Farmer Support</h3>
          <p>Important farming information and aiding government policies</p>
        </div>
        <div className="service-item">
          <h3><a href="https://financial-support-five.vercel.app/"> Financial Support</a></h3>
          <p>Debt management and financial planning system for farmers</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Farmer Aid. All rights reserved.</p>
      <ul className="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default App;

