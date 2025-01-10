import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
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

const Footer = () => {
  return (
    <footer className="footer">
      {/* Copyright Section */}
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Neel Sobhasana. All rights reserved.</p>
      </div>
      </Section>

      {/* Social Media Icons */}
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <div className="footer-social">
        <a href="https://github.com/Neelpatel00" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/neel-patel-194865204" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com/neelsobhasana/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      </Section>
    </footer>
  );
};

export default Footer;
