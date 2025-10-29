import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center flow">
          {/* Hero Section with Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="eyebrow">Full Stack • DevOps</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-brand mb-6 tracking-tight">
              Hi, I'm Tom Nyambu
            </h1>
          </motion.div>

          {/* Intro with Slide Up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl text-gray-700 mb-4">
              Full Stack Developer & DevOps Engineer
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Building scalable full-stack systems, deploying cloud infrastructures,
              and automating CI/CD pipelines across Azure and DigitalOcean.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <a href="/resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
