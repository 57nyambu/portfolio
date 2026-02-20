import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/57nyambu', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tomnyambu', icon: Linkedin },
    { name: 'Email', url: 'mailto:mwakionyambu57@gmail.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-inner">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/tom-logo.svg"
                alt="Tom Nyambu"
                style={{ height: '2rem', width: 'auto', filter: 'invert(1)' }}
              />
              <span className="text-lg font-bold" style={{ color: 'var(--white)' }}>
                Tom<span style={{ color: 'var(--orange)' }}>Nyambu</span>
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(250,250,248,0.6)' }}>
              Full Stack Engineer & Cloud Architect specializing in enterprise platforms, fintech solutions, and scalable cloud deployments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(250,250,248,0.7)' }}>Navigation</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(250,250,248,0.5)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(250,250,248,0.7)' }}>Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="text-xs" style={{ color: 'rgba(250,250,248,0.4)' }}>
            &copy; {currentYear} Tom Nyambu. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(250,250,248,0.3)' }}>
            Enterprise · Fintech · Cloud Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
