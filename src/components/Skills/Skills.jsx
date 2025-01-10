import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faAws
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPaintBrush, faBrain, faCogs } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Skills.css";

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

const Skills = () => {
  const skills = [
    { name: "NodeJS", icon: faNodeJs, color: "#68A063" },
    { name: "ReactJS", icon: faReact, color: "#61DAFB" },
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "UI/UX", icon: faPaintBrush, color: "#FF6347" },
    { name: "AI", icon: faBrain, color: "#9B59B6" },
    { name: "AWS", icon: faAws, color: "#FF9900" },         
    { name: "Micro Services", icon: faCogs, color: "#8E44AD" }  
  ];

  return (
    <section className="skills-section" id="skills">
    <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <h2 className="skills-title">My Skills</h2></Section>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
          <div className="skill-card" key={index}>
            <FontAwesomeIcon
              icon={skill.icon}
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <h3 className="skill-name">{skill.name}</h3>
            
          </div>
          </Section>
        ))}
      </div>
    </section>
  );
};

export default Skills;
