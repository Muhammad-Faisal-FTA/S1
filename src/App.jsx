import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling with navbar offset
  const scrollToSection = (sectionRef) => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    window.scrollTo({
      top: sectionRef.current.offsetTop - navbarHeight, // Adjust for navbar height
      behavior: 'smooth', // Smooth scroll to the section
    });
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        portfolioRef={portfolioRef} 
        experienceRef={experienceRef} 
        contactRef={contactRef} 
      />
      
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={portfolioRef}><PortFolio /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  );
};

export default App;
