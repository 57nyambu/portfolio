import AnimatedSection from '../components/AnimatedSection';
import { Download, Briefcase, Award, Code, Shield, Server, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
  const competencies = [
    {
      title: 'Backend Engineering',
      items: 'Django, Django REST Framework, Flask, Python, RESTful APIs, JWT, WebSockets',
    },
    {
      title: 'Frontend Development',
      items: 'React, TypeScript, Tailwind CSS, Framer Motion, Responsive Design',
    },
    {
      title: 'Cloud & DevOps',
      items: 'Azure (IaaS), DigitalOcean, CI/CD, Docker, Nginx, Gunicorn, systemd, Linux',
    },
    {
      title: 'Database & Data',
      items: 'PostgreSQL, Redis, MongoDB, Query Optimization, Data Modeling',
    },
    {
      title: 'Fintech & Compliance',
      items: 'ISO 20022 Messaging, Tazama (AML/CFT), Payment Gateways, KRA Integration',
    },
    {
      title: 'Enterprise Platforms',
      items: 'Multi-tenant SaaS, eCommerce, ERP, Inventory Management, Business Registration',
    },
  ];

  const experiences = [
    {
      title: 'Backend Engineer / DevOps Lead',
      company: 'Remote Startup',
      period: '5 Months',
      items: [
        'Led full backend architecture and deployment for the startup\'s MVP using Django & DRF',
        'Implemented CI/CD pipelines with automated testing, deployment, and Telegram/email notifications',
        'Configured server automation, scaling, and security across multiple DigitalOcean droplets',
        'Designed RESTful API architecture serving web and mobile client applications',
        'Trained new recruits for system maintenance as part of operational transition',
      ],
    },
    {
      title: 'Fintech Integration Engineer',
      company: 'Client Project — Inter-continental Transactions',
      period: 'Contract',
      items: [
        'Implemented integration with Tazama open-source transaction monitoring system for real-time AML/CFT compliance',
        'Worked with ISO 20022 messaging standards for cross-border and international payment processing',
        'Designed transaction screening pipelines for clients processing inter-continental fund transfers',
        'Ensured compliance with regulatory frameworks across multiple jurisdictions',
        'Proof of work and detailed documentation available on demand',
      ],
    },
  ];

  const education = [
    {
      title: 'Bachelor of Science in Information Technology',
      institution: 'Kenyatta University — Nairobi, Kenya',
    },
    {
      title: 'DevOps & Cloud Engineering Training',
      institution: 'Moringa School',
    },
    {
      title: 'Linux Systems Administration',
      institution: 'Self-taught — Nearly 2 years of hands-on Ubuntu server administration',
    },
  ];

  return (
    <div className="page-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Briefcase size={16} />
                <span>Resume</span>
              </div>
              <h1 className="section-heading">
                Tom Nyambu
              </h1>
              <p className="section-subheading">
                Full Stack Engineer · Cloud Architect · Fintech Specialist
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <a href="/resume.pdf" download>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="home-btn home-btn-primary"
                  >
                    <Download size={18} />
                    <span>Download Full Resume</span>
                  </motion.button>
                </a>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="home-btn home-btn-secondary"
                  >
                    <ExternalLink size={18} />
                    <span>Get in Touch</span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Core Competencies */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box">
                    <Code size={22} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Core Competencies
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {competencies.map((comp) => (
                    <div key={comp.title}>
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--orange)' }}>{comp.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{comp.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Experience */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box">
                    <Briefcase size={22} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Professional Experience
                  </h2>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className={idx > 0 ? 'pt-8 border-t' : ''} style={idx > 0 ? { borderColor: 'var(--line)' } : {}}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                          <p className="font-medium text-sm" style={{ color: 'var(--orange)' }}>{exp.company}</p>
                        </div>
                        <span className="text-sm font-medium mt-1 sm:mt-0" style={{ color: 'var(--gray)' }}>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.items.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box">
                    <Award size={22} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Education & Training
                  </h2>
                </div>
                <div className="space-y-5">
                  {education.map((edu, idx) => (
                    <div key={idx} className={idx > 0 ? 'pt-5 border-t' : ''} style={idx > 0 ? { borderColor: 'var(--line)' } : {}}>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{edu.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--gray)' }}>{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications & Goals */}
            <AnimatedSection delay={0.5}>
              <div className="glass-card-dark p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box">
                    <Shield size={22} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Certifications & Industry Focus
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                    <span>Preparing for Azure Cloud certification</span>
                  </div>
                  <div className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                    <span>Hands-on experience with ISO 20022 international payment standards</span>
                  </div>
                  <div className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                    <span>Tazama transaction monitoring integration for AML/CFT compliance</span>
                  </div>
                  <div className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                    <Server size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                    <span>Focused on enterprise SaaS, fintech, and regulatory-compliant systems</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Resume;
