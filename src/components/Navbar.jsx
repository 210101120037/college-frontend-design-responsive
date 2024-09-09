import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">
                    WAVE CLASSES
                </a>
                <button className={isOpen ? 'close' : 'hamburger'} onClick={toggleMenu}>
                    {isOpen ? <span>&times;</span> : (
                        <>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </>
                    )}
                </button>
                {isOpen && (
                    <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Course</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;