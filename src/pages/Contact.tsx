import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Send, Mail, Github, Linkedin, MessageSquare, Clock, Shield, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:mwakionyambu57@gmail.com',
      icon: Mail,
      label: 'mwakionyambu57@gmail.com',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/57nyambu',
      icon: Github,
      label: 'github.com/57nyambu',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tomnyambu',
      icon: Linkedin,
      label: 'linkedin.com/in/tomnyambu',
    },
  ];

  const serviceAreas = [
    { icon: Building2, label: 'Enterprise Platform Development' },
    { icon: Shield, label: 'Fintech & Compliance Systems' },
    { icon: MessageSquare, label: 'API Architecture & Integration' },
  ];

  return (
    <div className="page-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Mail size={16} />
                <span>Contact</span>
              </div>
              <h1 className="section-heading">
                Let's Build Something Together
              </h1>
              <p className="section-subheading">
                Available for enterprise projects, fintech integrations, and cloud architecture consulting.
              </p>
            </div>

            {/* Service Areas */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="home-client-pill">
                  <area.icon size={16} className="home-client-icon" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{area.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card-dark p-6 sm:p-8"
                >
                  <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select a topic</option>
                          <option value="enterprise">Enterprise Development</option>
                          <option value="fintech">Fintech Integration</option>
                          <option value="cloud">Cloud Architecture</option>
                          <option value="devops">DevOps & CI/CD</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Tell me about your project, requirements, and timeline..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                      style={{
                        background: status === 'sending' ? 'var(--gray)' : status === 'sent' ? '#16a34a' : 'var(--orange)',
                        color: '#fff',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        opacity: status === 'sending' ? 0.7 : 1,
                        boxShadow: status === 'idle' ? '0 4px 14px rgba(240,92,42,0.3)' : 'none',
                      }}
                    >
                      {status === 'sending' ? (
                        <span>Sending...</span>
                      ) : status === 'sent' ? (
                        <span>Message Sent!</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </AnimatedSection>

              {/* Sidebar */}
              <AnimatedSection delay={0.4}>
                <div className="space-y-6">
                  {/* Connect Links */}
                  <div className="glass-card-dark p-6 sm:p-8">
                    <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Connect Directly</h2>
                    <div className="space-y-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target={social.name !== 'Email' ? '_blank' : undefined}
                          rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group"
                          style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid var(--line)' }}
                        >
                          <div className="icon-box">
                            <social.icon size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{social.name}</p>
                            <p className="text-xs" style={{ color: 'var(--gray)' }}>{social.label}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="glass-card-dark p-6 sm:p-8" style={{ borderColor: 'var(--orange)', borderWidth: '1px' }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--orange)' }} />
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Currently Available</h3>
                    </div>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      Open to enterprise contracts, fintech integrations, cloud consulting, and full-time opportunities.
                    </p>
                    <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--gray)' }}>
                      <Clock size={14} />
                      <span>Typical response within 24 hours</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
