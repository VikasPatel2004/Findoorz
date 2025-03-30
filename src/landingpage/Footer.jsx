import React from 'react';
import './Footer.css'; // Optional: Import a CSS file for custom styles

function Footer() {
    return (
        <footer className="footer mt-5" style={{ backgroundColor: "rgb(246, 238, 221)", padding: "40px 0", color: "#333" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to helping you find the best PG and hostel accommodations that suit your needs. 
                            Explore our listings and discover your perfect living space.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Services</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@yourwebsite.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3"><a href="#" style={{ color: '#333' }}><i className="fab fa-facebook-f"></i></a></li>
                            <li className="me-3"><a href="#" style={{ color: '#333' }}><i className="fab fa-twitter"></i></a></li>
                            <li className="me-3"><a href="#" style={{ color: '#333' }}><i className="fab fa-instagram"></i></a></li>
                            <li className="me-3"><a href="#" style={{ color: '#333' }}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;