import AnimatedSection from '../components/AnimatedSection';
import { Download, Briefcase, Award, Code, Shield, Server, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { downloadResume } from '../utils/resume';

const Resume = () => {
  const competencies = [
    { title: 'Backend Engineering',   items: 'Django, Django REST Framework, FastAPI, Flask, Python, RESTful APIs, JWT, WebSockets' },
    { title: 'Frontend Development',  items: 'React, TypeScript, Tailwind CSS, Framer Motion, Responsive Design' },
    { title: 'Cloud & DevOps',        items: 'Azure (IaaS), DigitalOcean, Docker, Nginx, Gunicorn, systemd, Linux, CI/CD' },
    { title: 'Storage & Data',        items: 'PostgreSQL, MySQL, SQLite, MinIO (S3-compatible), Query Optimization, Data Modeling' },
    { title: 'Fintech & Compliance',  items: 'ISO 20022 Messaging, Tazama (AML/CFT), M-Pesa, Payment Gateways, KRA Integration' },
    { title: 'Platform Engineering',  items: 'Multi-tenant SaaS, eCommerce, Email Automation, Analytics, Business Registration Systems' },
  ];

  const experiences = [
    {
      title:  'Internship - Junior Backend Developer',
      company: 'Lipana — Developer Payment Platform',
      period: 'OCT 2025 – Feb 2025',
      link:   'https://lipana.dev',
      items: [
        'Developed backend infrastructure for a real-time payment processing platform supporting developer-facing APIs',
        'Integrated Tazama, an open-source AML/CFT fraud detection system, into the core payment workflow',
        'Implemented transaction pipelines aligned with ISO 20022 international financial messaging standards',
        'Configured and deployed MinIO (S3-compatible) object storage for secure and scalable asset management',
        'Collaborated with cross-functional teams to ensure reliability, compliance, and data integrity',
      ],
    },
    {
      title:  'Full Stack Developer',
      company: 'Dima Platform — Multi-Tenant eCommerce',
      period: '2025 – Present',
      link:   'https://dima.co.ke',
      items: [
        'Designed and built a multi-tenant eCommerce and business management platform from the ground up',
        'Integrated M-Pesa payments, SMS & email pipelines, and real-time analytics as core platform components',
        'Built secure REST APIs for products, orders, user management, and tenant isolation with role-based access control',
        'Self-hosted MinIO for object storage and Umami for privacy-focused analytics across all live projects',
        'Manages full deployment lifecycle on Microsoft Azure IaaS including Docker, Nginx, and monitoring',
      ],
    },
    {
      title:  'Full Stack Developer',
      company: 'Jangara Mall — Client Project',
      period: '2025',
      link:   'https://jangara.tomnyambu.dev',
      items: [
        'Architected and delivered the entire full-stack platform for a client mall from database to production',
        'Built booking, utilities management, and vendor service workflows covering all mall operations',
        'Handled both backend (Django/DRF) and frontend (React) development and cloud deployment',
      ],
    },
    {
      title:  'Backend Developer',
      company: 'DevSend — Email Automation Tool',
      period: '2025',
      link:   null,
      items: [
        'Built a secure email scheduling platform on FastAPI integrated with the Resend API',
        'Supports scheduled sends, rich HTML templates, bulk personalization, and multi-key API rotation',
        'Delivery logging, CSV export, admin auth, and real-time search included in the admin interface',
      ],
    },
  ];

  const education = [
    {
      title: 'Bachelor of Science in Information Technology',
      institution: 'Taita Taveta University — BSc in Information Technology',
    },
    {
      title: 'Independent & Online Learning',
      institution: 'Backend Development, Cloud Computing, Modern Web Technologies — Udemy, YouTube, Google Developer Resources',
    },
    {
      title: 'Linux Systems Administration',
      institution: 'Self-taught — 2+ years of hands-on Ubuntu server administration in production environments',
    },
  ];

  const infraItems = [
    'Manage a personal cloud server on Microsoft Azure hosting multiple production-grade Dockerized services',
    'Deploy and maintain applications behind Nginx reverse proxy with SSL, systemd, and automated backups',
    'Operate a custom CI/CD engine (Hookworm) with GitHub webhooks, Telegram alerts, and zero-downtime deploys',
    'Self-host Umami analytics, MinIO file services, and application backends across all live platforms',
    'Handle all server security, system updates, monitoring, and incident response independently',
  ];

  const certItems = [
    { icon: CheckCircle, text: 'Preparing for Microsoft Azure Cloud certification (AZ-900 / AZ-104)' },
    { icon: CheckCircle, text: 'Hands-on experience with ISO 20022 international payment messaging standards' },
    { icon: CheckCircle, text: 'Tazama transaction monitoring integration for AML/CFT regulatory compliance' },
    { icon: CheckCircle, text: 'M-Pesa STK push integration and payment reconciliation for Kenyan markets' },
    { icon: Server,      text: 'Focused on enterprise SaaS, fintech infrastructure, and privacy-first self-hosted systems' },
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
              <h1 className="section-heading">Tom Nyambu</h1>
              <p className="section-subheading">
                Full Stack Developer · Cloud Infrastructure · Fintech Integration
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="home-btn home-btn-primary"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
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
                  <div className="icon-box"><Code size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Core Competencies</h2>
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
                  <div className="icon-box"><Briefcase size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Professional Experience</h2>
                </div>
                <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className={idx > 0 ? 'pt-8 border-t' : ''}
                      style={idx > 0 ? { borderColor: 'var(--line)' } : {}}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1">
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-medium text-sm" style={{ color: 'var(--orange)' }}>{exp.company}</p>
                            {exp.link && (
                              <a href={exp.link} target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--gray)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap" style={{ color: 'var(--gray)' }}>
                          {exp.period}
                        </span>
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

            {/* Infrastructure & Cloud */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Server size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Infrastructure & Cloud</h2>
                </div>
                <div className="space-y-3">
                  {infraItems.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.45}>
              <div className="glass-card-dark p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Award size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Education & Training</h2>
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

            {/* Certifications & Focus */}
            <AnimatedSection delay={0.5}>
              <div className="glass-card-dark p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="icon-box"><Shield size={22} /></div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Certifications & Industry Focus</h2>
                </div>
                <div className="space-y-3">
                  {certItems.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                      <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--orange)' }} />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
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
