import React, { useState } from 'react';
import './Navbar.css'; // Add styling here or inline

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src="/assets/Images/logon.png" alt="avatar" /></div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
                <a href="#contact">Contact Me</a>
            </div>
            <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default NavBar;
