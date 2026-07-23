import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
// Reused for .home-btn styles — imported directly here (not just via Home.tsx)
// so this page renders correctly even when route-based code splitting means
// Home's CSS chunk was never loaded in this session.
import '../styles/home.css';

const NotFound = () => {
  return (
    <div className="page-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <p
            className="font-bold"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(4rem, 12vw, 7rem)',
              color: 'var(--orange)',
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            404
          </p>
          <h1 className="section-heading">Page Not Found</h1>
          <p className="section-subheading" style={{ maxWidth: 'none', margin: '0 auto 2rem' }}>
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="home-btn home-btn-primary">
              <Home className="home-btn-icon" />
              <span>Back to Home</span>
            </Link>
            <Link to="/projects" className="home-btn home-btn-secondary">
              <ArrowLeft className="home-btn-icon" />
              <span>View Projects</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
