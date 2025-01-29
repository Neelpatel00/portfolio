import React, { useEffect, useState } from 'react';
import './About.css'; // Include the CSS for styling
import { Card } from 'react-bootstrap'; // Using react-bootstrap for the card component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faCalendar, faLocationDot, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, animation, initial }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger animation when 20% visible

  useEffect(() => {
    if (inView) {
      controls.start(animation);
    }
  }, [controls, inView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
    const [inView, setInView] = useState(false);
  const [countCompletedProjects, setCountCompletedProjects] = useState(0);
  const [countHappyCustomers, setCountHappyCustomers] = useState(0);
  const [countExperience, setCountExperience] = useState(0);
  const [countCertifications, setCountCertifications] = useState(0);

  // Detect when the stats section comes into view
  const handleScroll = () => {
    const statsElement = document.querySelector('.stats');
    const rect = statsElement.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  // Function to animate counting up
  const countUp = (start, end, setter, duration) => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(start + (end - start) * (progress / duration), end);
      setter(Math.floor(currentCount));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (inView) {
      // Trigger the counting animation when the stats section comes into view
      countUp(0, 20, setCountCompletedProjects, 1500);
      countUp(0, 15, setCountHappyCustomers, 1500);
      countUp(0, 3, setCountExperience, 1500);
      countUp(0, 15, setCountCertifications, 1500);
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="about-us" id="about">
      {/* First Row: "About Me" Title */}
      <div className="about-title">
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
        <h2>About Me</h2></Section>
      </div>

      {/* Second Row: Image and Flip Card with Animation */}
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <div className="about-us-container">
        {/* Flip Card Container */}
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* Front side with image */}
            <div className="flip-card-front">
              <img src="./assets/Images/n2.png" alt="Avatar" />
            </div>
            
            {/* Back side with content */}
            <div className="flip-card-back">
              <Card className="about-card">
                <Card.Body className='about-card-body'>
                  <h3>Neel Sobhasana</h3>
                  <p className='p-content'><FontAwesomeIcon icon={faCode} /><strong>Full Stack Developer</strong></p>
                  <p className='p-content'><FontAwesomeIcon icon={faEnvelope} /><strong>work.neel01@gmail.com</strong></p>
                  <p className='p-content'><FontAwesomeIcon icon={faGraduationCap} /><strong>Master of Computer Application</strong></p>
                  <p className='p-content'><FontAwesomeIcon icon={faCalendar} /><strong>21st January, 2001</strong></p>
                  <p className='p-content'><FontAwesomeIcon icon={faLocationDot} /><strong>ahmedabad, India</strong></p>
                  <p className='p-content'><FontAwesomeIcon icon={faBriefcase} /><strong>3+ years</strong></p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div></Section>

      {/* Third Row: Stats Boxes */}
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <div className="stats">
        <div className="stat-box">
          <h4>{countCompletedProjects}<span style={{color:"green"}}>*</span></h4>
          <p>Completed Projects</p>
        </div>
        <div className="stat-box">
          <h4>{countHappyCustomers}+</h4>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h4>{countExperience}+</h4>
          <p>Years of Experience</p>
        </div>
        <div className="stat-box">
          <h4>{countCertifications}+</h4>
          <p>Technology Used</p>
        </div>
      </div>
      </Section>
    </section>
  );
};

export default AboutUs;
