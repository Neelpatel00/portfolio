import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from '../Navbar/Navbar';
import Homec from './Homec'
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div className='home-section'>
      <NavBar />
      <Homec />
      </div>
      <Services />
      <Skills />
      <Projects />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;