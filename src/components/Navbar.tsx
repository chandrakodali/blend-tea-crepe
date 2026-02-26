import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isScrolledRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            // Only trigger React re-render when the state actually changes
            if (scrolled !== isScrolledRef.current) {
                isScrolledRef.current = scrolled;
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Visit Us', href: '#visit' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="navbar-logo">
                    BLEND<span className="logo-icon">🧋</span>
                    <span className="logo-subtitle">Tea & Crepe</span>
                </a>

                {/* Desktop Nav */}
                <div className="navbar-links desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
