import './Footer.css';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        BLEND<span className="logo-icon">🧋</span>
                        <span className="logo-subtitle" style={{ color: 'var(--color-bg-alt)' }}>Tea & Crepe</span>
                    </a>
                    <p className="footer-tagline">Let's Blend Together — Carbondale, IL</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                    <a href="#visit">Visit Us</a>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook" className="social-icon">
                            <Facebook size={24} />
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">© 2024 Blend Tea & Crepe Lounge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
