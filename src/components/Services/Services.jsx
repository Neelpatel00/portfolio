import React, { useEffect } from 'react';
import './Services.css';

// Icons for services (you can use FontAwesome or any other icon library)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faLaptopCode, faCog, faBrain } from '@fortawesome/free-solid-svg-icons';
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

const services = [
  {
    id: 1,
    logo: faCode,
    name: "API Development & Integration",
    description: "We build robust APIs for seamless integration with third-party applications, enhancing your system's capabilities."
  },
  {
    id: 2,
    logo: faLaptopCode,
    name: "Web App Development",
    description: "We create scalable and responsive web applications tailored to meet your business needs, providing seamless user experiences."
  },
  {
    id: 3,
    logo: faMobileAlt,
    name: "Mobile App Development",
    description: "We design and develop mobile applications for iOS and Android, ensuring high performance and user engagement."
  },
  {
    id: 4,
    logo: faCog,
    name: "UI/UX Services",
    description: "Our UI/UX services focus on creating intuitive and beautiful interfaces that provide a seamless user experience."
  },
  {
    id: 5,
    logo: faBrain,
    name: "AI Integration",
    description: "We integrate AI solutions into your systems to enhance automation, decision-making, and personalization."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <Section
        initial={{ opacity: 0, y: 50 }}
        animation={{ opacity: 1, y: 0 }}
      >
        <div className="services-header">
          <h2 className='big-2'>Services</h2>
          <p>We offer a wide range of services to help you achieve your business goals.</p>
        </div>
      </Section>
      <div className="services-list">
        {services.map(service => (
          <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.logo} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </Section>
        ))}
      </div>
    </section>
  );
};

export default Services;
