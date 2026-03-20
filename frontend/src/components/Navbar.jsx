import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#location', label: 'Find Us' },
    { href: '#careers', label: 'Careers' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('#home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <a href="#home" className="nav-logo">
                    <img src={logo} alt="Thottara Kitchen Logo" className="hotel-logo" />
                    Thottara <span className="accent">Kitchen</span>
                </a>

                <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${active === link.href ? 'active' : ''}`}
                            onClick={() => { setActive(link.href); setMenuOpen(false); }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
