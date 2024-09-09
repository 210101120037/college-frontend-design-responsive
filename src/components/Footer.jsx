import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    officiis aut temporibus consequuntur alias veniam. Accusantium at harum
                    sint nihil, quod quia architecto id provident exercitationem voluptatem
                    unde! Architecto voluptas dolorum id consectetur unde.
                </p>
                <ul className="social-links">
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <p>Made With by Pen & Pencil</p>
            </div>
        </footer>
    );
};

export default Footer;