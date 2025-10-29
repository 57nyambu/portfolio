import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto flow-lg">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold gradient-brand mb-4 tracking-tight">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600">
                Have a project in mind? Let's work together!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        status === 'sending'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : status === 'sent'
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                      }`}
                    >
                      {status === 'sending' ? (
                        <span>Sending...</span>
                      ) : status === 'sent' ? (
                        <span>Message Sent!</span>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.4}>
                <div className="space-y-6">
                  <div className="glass-card p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-primary mb-6">Connect With Me</h2>
                    <div className="space-y-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target={social.name !== 'Email' ? '_blank' : undefined}
                          rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group"
                        >
                          <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                            <social.icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                          </div>
                          <div>
                            <p className="font-semibold text-primary">{social.name}</p>
                            <p className="text-sm text-gray-600">{social.label}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-lg shadow-lg p-6 sm:p-8">
                    <h3 className="text-xl font-bold mb-4">Availability</h3>
                    <p className="mb-4">
                      I'm currently available for freelance projects and full-time opportunities.
                    </p>
                    <p className="text-sm text-gray-200">
                      Response time: Usually within 24 hours
                    </p>
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
