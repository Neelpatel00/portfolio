import React, { useState, useEffect } from "react";
import { Modal, Carousel, Button, Card } from "react-bootstrap";
import "./Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Brizo Ceramica is an elegant e-commerce platform specializing in premium ceramic tiles and home decor solutions. Designed to provide an exceptional shopping experience, the website features a visually appealing layout, intuitive navigation, and responsive design. Customers can explore a diverse collection of tiles, filter by styles, and place orders seamlessly. The platform also integrates secure payment methods and ensures fast delivery, making it the perfect choice for modern home improvement needs.",
    images: [
      "/assets/Brizo/1.png",
      "/assets/Brizo/2.png",
      "/assets/Brizo/3.png",
      "/assets/Brizo/4.png",
      "/assets/Brizo/5.png",
      "/assets/Brizo/6.png",
    ],
    path: "Brizo"
  },
  {
    name: "Post-Art Admin Dashboard",
    description:
      "Post-Art Admin Dashboard is a robust and intuitive platform designed for managing a festival business image generation app. With this powerful tool, admins can effortlessly add, edit, and delete images and categories associated with various festivals, ensuring the smooth operation of the app. The dashboard provides an easy-to-navigate interface for administrators to perform various management tasks, maintain an up-to-date image library, and categorize images for quick access. It streamlines the workflow, enhances user experience, and simplifies the management of festival-related visual content",
    images: [
      "/assets/Post_art/1.png",
      "/assets/Post_art/2.png",
      "/assets/Post_art/3.png",
      "/assets/Post_art/4.png",
      "/assets/Post_art/5.png",
      "/assets/Post_art/6.png",
    ],
  },
  {
    name: "IntelliBot AI",
    description:
      "IntelliBot AI is a cutting-edge conversational chatbot powered by advanced artificial intelligence. Designed to deliver human-like interactions, it seamlessly assists users by answering queries, providing personalized recommendations, and automating routine tasks. IntelliBot adapts to user behavior, learns from interactions, and ensures an engaging and efficient communication experience. Whether for customer support, virtual assistance, or general inquiries, IntelliBot AI is the ultimate tool to enhance user engagement and streamline operations.",
    images: [
      "/assets/Chat_boat/1.png",
      "/assets/Chat_boat/2.png",
      "/assets/Chat_boat/3.jpg",
      "/assets/Chat_boat/4.jpg",
      "/assets/Chat_boat/5.png",
    ],
  }
];

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
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};


const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
      <h3 className="projects-title">My Projects</h3></Section>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
          <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.images[0]}
                alt={project.name}
              />
              <Card.Body className="project-card-body">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description.slice(0, 90)}...</Card.Text>
                <Button variant="primary" onClick={() => handleShow(project)} > <FontAwesomeIcon icon={faCircleInfo} /> </Button>
              </Card.Body>
            </Card>
            </Section>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Carousel */}
              <Carousel>
                {selectedProject.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* Description */}
              <div className="project-description mt-3">
                <p>{selectedProject.description}</p>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
