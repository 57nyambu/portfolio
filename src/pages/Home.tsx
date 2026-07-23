import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code2, Cloud, Shield, Building2, TrendingUp, Server } from 'lucide-react';
import { downloadResume } from '../utils/resume';
import '../styles/home.css';

// The dotlottie player is the single heaviest dependency on this page
// (~500KB). It's purely decorative, so it's split into its own chunk and
// loaded after the hero text/CTAs are already interactive, instead of
// blocking the initial render of the most-visited page on the site.
const DotLottieReact = lazy(() =>
  import('@lottiefiles/dotlottie-react').then((mod) => ({ default: mod.DotLottieReact }))
);

const Home = () => {
  const capabilities = [
    { icon: Code2, label: 'Full Stack Engineering', desc: 'Django · React · TypeScript' },
    { icon: Cloud, label: 'Cloud Architecture', desc: 'Azure · DigitalOcean · IaaS' },
    { icon: Shield, label: 'Fintech & Compliance', desc: 'ISO 20022 · Tazama · AML' },
    { icon: Server, label: 'DevOps & Infrastructure', desc: 'CI/CD · Nginx · Docker' },
  ];

  const clientTypes = [
    { icon: Building2, label: 'Enterprise' },
    { icon: TrendingUp, label: 'Fintech' },
    { icon: Shield, label: 'Regulatory' },
  ];

  return (
    <div className="home-container">
      {/* Animated background elements */}
      <div className="home-bg-effects">
        <div className="home-bg-orb home-bg-orb-1" />
        <div className="home-bg-orb home-bg-orb-2" />
        <div className="home-bg-grid" />
      </div>

      <div className="home-content">
        <div className="home-inner">
          
          {/* Hero Content */}
          <div className="home-hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="home-badge-wrapper"
            >
              <span className="home-badge">
                <span className="home-badge-dot" />
                Available for Enterprise & Fintech Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="home-title"
            >
              <span className="home-title-gradient">
                Tom Nyambu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="home-subtitle"
            >
              Full Stack Engineer & Cloud Architect
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="home-description"
            >
              Architecting scalable enterprise systems, fintech platforms, and cloud-native 
              solutions. Specialized in ISO 20022 integrations, transaction monitoring, 
              and production-grade deployments across Azure and DigitalOcean.
            </motion.p>

            {/* Client Type Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="home-client-types"
            >
              {clientTypes.map((type, idx) => (
                <div key={idx} className="home-client-pill">
                  <type.icon className="home-client-icon" />
                  <span>{type.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="home-cta"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="home-btn home-btn-primary">
                  <span>View Projects</span>
                  <ArrowRight className="home-btn-icon" />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="home-btn home-btn-secondary"
                onClick={downloadResume}
              >
                <Download className="home-btn-icon" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="home-lottie"
          >
            <Suspense fallback={null}>
              <DotLottieReact
                src="https://lottie.host/95513a23-956d-418b-ab0a-76cb0b75f02d/edsEiNGQsU.lottie"
                loop
                autoplay
              />
            </Suspense>
          </motion.div>

        </div>
      </div>

      {/* Capabilities Strip */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="home-capabilities"
      >
        <div className="home-capabilities-inner">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="home-capability-card">
              <cap.icon className="home-capability-icon" />
              <div>
                <p className="home-capability-label">{cap.label}</p>
                <p className="home-capability-desc">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;