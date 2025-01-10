import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import './Home.css';

const Homec = () => {
    const [name_text, changeNameText] = useState("Neel Sobhasana");
    const [fade, setFade] = useState(true); // To control fade animation

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                // Switch text when fade-out is complete
                changeNameText((prev) =>
                    prev === "Neel Sobhasana" ? "Full Stack Developer" : "Neel Sobhasana"
                );
                setFade(true); // Fade back in
            }, 500); // Match the CSS transition duration
        }, 5000);

        return () => clearInterval(interval); // Cleanup the interval
    }, []);

    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
  
    const fadeInRight = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
    };
  
    const fadeInWithDelay = (delay = 0) => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay } },
    });
    
  return (
    <section className="home" id="home">
      
      <div className="home-content">
      <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} >
          Hello, I'm <span style={{color:"#74c69d"}} className={`animated-text ${fade ? "fade-in" : "fade-out"}`}>{name_text}</span><hr />
          </motion.h1>
        <br />
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
        I’m a Developer specializing in the MERN stack and AI innovation. I create scalable web and mobile applications and intelligent solutions that transform ideas into impactful digital experiences.
        </motion.p>
        <br />
        <hr />
        <motion.p className="motivational-quote" initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }} >
          "Coding is not just a skill, it's an art of bringing ideas to life."
        </motion.p>
        <motion.div
          className="find-me"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="social-icons">
            <a href="https://github.com/Neelpatel00" target="_blank" rel="noopener noreferrer" className="social-link icon-am" > <FontAwesomeIcon icon={faGithub} /> </a>
            <a href="https://linkedin.com/in/neel-patel-194865204" target="_blank" rel="noopener noreferrer" className="social-link icon-am" > <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href="https://instagram.com/neelsobhasana/" target="_blank" rel="noopener noreferrer" className="social-link icon-am" > <FontAwesomeIcon icon={faInstagram} /> </a>
          </div>
        </motion.div>
        <motion.a
          href="#contact"
          className="connect-btn"
          initial="hidden"
          animate="visible"
          variants={fadeInWithDelay(0.6)}
        >
          Let's Connect
        </motion.a>

      </div>
      <motion.div
        className="home-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      >
        <img src="/assets/Images/n3.png" alt="avatar" />
      </motion.div>
    </section>
  );
};

export default Homec;