import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => { document.body.style.overflow = prev; };
    } else {
      toggleRef.current?.focus();
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <a href="#main" className="skip-link">Skip to content</a>

      <nav aria-label="Primary" className="navbar-container">
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand" aria-label="Go to homepage">
            <img 
              src="/tom-logo.svg" 
              alt="Tom Nyambu" 
              className="navbar-logo-img" 
            />
            <span className="navbar-brand-text">
              Tom<span className="navbar-brand-accent">Nyambu</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {navLinks.slice(0, navLinks.length - 1).map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-link ${active ? 'navbar-link--active' : ''}`}
                >
                  {link.name}
                  {active && <span className="navbar-link-indicator" />}
                </Link>
              );
            })}

            {/* CTA Contact Button */}
            <Link
              to="/contact"
              className="navbar-cta"
            >
              <Mail className="navbar-cta-icon" />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            ref={toggleRef}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="navbar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="navbar-mobile"
              onKeyDown={(e) => { if (e.key === 'Escape') setIsOpen(false); }}
            >
              <div className="navbar-mobile-inner">
                <div className="navbar-mobile-header">
                  <Link to="/" className="navbar-mobile-brand" onClick={() => setIsOpen(false)}>
                    <img 
                      src="/tom-logo.svg" 
                      alt="Tom Nyambu" 
                      className="navbar-mobile-logo-img" 
                    />
                    <span className="navbar-mobile-brand-text">
                      Tom<span className="navbar-brand-accent">Nyambu</span>
                    </span>
                  </Link>
                  <button 
                    aria-label="Close menu" 
                    onClick={() => setIsOpen(false)} 
                    className="navbar-mobile-close"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="navbar-mobile-links">
                  {navLinks.slice(0, navLinks.length - 1).map((link, idx) => (
                    <Link
                      key={link.path}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`navbar-mobile-link ${
                        location.pathname === link.path ? 'navbar-mobile-link--active' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="navbar-mobile-footer">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="navbar-mobile-cta"
                  >
                    <Mail size={18} /> Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;