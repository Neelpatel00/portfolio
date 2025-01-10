import React, { useState, useEffect } from 'react';
import './ContactUs.css';

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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [showModal, setShowModal] = useState(false); // For modal popup
    const [modalMessage, setModalMessage] = useState(''); // Message for modal
    const [modalType, setModalType] = useState(''); // "success" or "error"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const closeModal = (e) => {
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const emailData = {
            service_id: 'service_n7btyfx', // Replace with your EmailJS service ID
            template_id: 'template_1dylrmc', // Replace with your EmailJS template ID
            user_id: 'uqrV8h7PvXtclqvSf', // Replace with your EmailJS public API key
            template_params: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
            },
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });
            if (response.ok) {
                setModalMessage("Thank you for getting in touch! Your message has been successfully sent. We'll get back to you shortly.");
                setModalType('success');
                setShowModal(true);
                setStatus('');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
            } else {
                setModalMessage('Failed to send your message. Please try again.');
                setModalType('error');
                setShowModal(true);
                setStatus('');
            }
        } catch (error) {
            console.error('Error:', error);
            setModalMessage('Failed to send your message. Please try again.');
            setModalType('error');
            setShowModal(true);
            setStatus('');
        }
    };

    return (
        <section className="contact-us" id='contact'>
            {/* Title outside the card */}
            <div className="contact-title">
                <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} ><h2>Contact Me</h2></Section>
            </div>

            {/* Card with form */}
            <Section initial={{ opacity: 0, y: 50 }} animation={{ opacity: 1, y: 0 }} >
            <div className="contact-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                    <p className="status">{status}</p>
                </form>
            </div>
            </Section>

            {/* Modal for feedback */}
            {showModal && (
                <div className={`modal-pop`}>
                    <div className="modal-content-pop">
                        <p style={{color:(modalType === "success") ? "#4caf50" : "#f44336"}}>{modalMessage}</p>
                        <button onClick={closeModal} style={{background:(modalType === "success") ? "#4caf50" : "#f44336"}}>Close</button>
                    </div>
                </div>
            )}
            
        </section>
    );
};

export default ContactUs;
