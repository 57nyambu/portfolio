import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/57nyambu',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tomnyambu',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:mwakionyambu57@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="hover:text-accent transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300 text-center">
            © {currentYear} Tom Nyambu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
