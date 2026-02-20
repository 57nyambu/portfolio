import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ];

  // Render mobile menu into document.body via portal to avoid
  // stacking-context issues from the header's backdrop-filter.
  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="navbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="navbar-mobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onKeyDown={(e) => { if (e.key === 'Escape') setIsOpen(false); }}
          >
            <div className="navbar-mobile-inner">
              {/* Mobile Header */}
              <div className="navbar-mobile-header">
                <Link to="/" className="navbar-mobile-brand" onClick={() => setIsOpen(false)}>
                  <img src="/tom-logo.svg" alt="Tom Nyambu" className="navbar-mobile-logo-img" />
                  <span className="navbar-mobile-brand-text">
                    Tom<span className="navbar-brand-accent">Nyambu</span>
                  </span>
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="navbar-mobile-close"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="navbar-mobile-links">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`navbar-mobile-link ${
                        location.pathname === link.path ? 'navbar-mobile-link--active' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="navbar-mobile-footer">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="navbar-mobile-cta"
                >
                  <Mail size={18} />
                  Contact
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#main" className="skip-link">Skip to content</a>

        <nav aria-label="Primary" className="navbar-container">
          <div className="navbar-inner">
            {/* Brand */}
            <Link to="/" className="navbar-brand" aria-label="Go to homepage">
              <img src="/tom-logo.svg" alt="Tom Nyambu" className="navbar-logo-img" />
              <span className="navbar-brand-text">
                Tom<span className="navbar-brand-accent">Nyambu</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="navbar-menu">
              {navLinks.map((link) => {
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
              <Link to="/contact" className="navbar-cta">
                <Mail className="navbar-cta-icon" />
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="navbar-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              ref={toggleRef}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="navbar-toggle-icon"
                  >
                    <X size={22} strokeWidth={2.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="navbar-toggle-icon"
                  >
                    <Menu size={22} strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Portal: render mobile menu outside header to avoid stacking-context issues */}
      {createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;