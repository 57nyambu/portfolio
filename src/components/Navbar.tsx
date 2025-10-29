import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    setIsOpen(false);
  }, [location]);

  // Lock body scroll and manage focus for the mobile menu
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-gray-200'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Skip to content for accessibility */}
      <a href="#main" className="skip-link">Skip to content</a>

      <nav aria-label="Primary" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary font-extrabold">TN</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
              Tom<span className="text-accent">Nyambu</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, navLinks.length - 1).map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${active ? 'nav-link--active text-primary' : 'text-primary/90'} `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Emphasized CTA for Contact */}
            <Link
              to={navLinks[navLinks.length - 1].path}
              className={`inline-flex items-center justify-center gap-2 rounded-full md:rounded-xl px-3 py-1 md:px-4 md:py-1 text-sm font-semibold transition-all duration-300 border header-cta btn-gradient ${
                location.pathname === '/contact' ? 'text-white' : 'text-primary'
              }`}
            >
              <Mail size={18} />
              {navLinks[navLinks.length - 1].name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            ref={toggleRef}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu + Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel: full-screen mobile sheet */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 md:hidden z-50 bg-white"
              onKeyDown={(e) => { if (e.key === 'Escape') setIsOpen(false); }}
            >
              <div className="flex flex-col h-full">
                <div className="px-4 pt-safe pb-3 border-b border-gray-200 flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-extrabold text-sm">TN</span>
                    </div>
                    <span className="text-base font-semibold text-primary">TomNyambu</span>
                  </Link>
                  <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2 rounded-lg text-primary hover:text-accent">
                    <X size={22} />
                  </button>
                </div>

                <div className="px-4 py-4 space-y-1 overflow-y-auto">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={link.path}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-lg font-medium transition-colors duration-200 hover:bg-primary/5 ${
                        location.pathname === link.path ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto px-4 pb-safe pt-2 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 btn-gradient rounded-full px-5 py-3 font-semibold text-primary"
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
