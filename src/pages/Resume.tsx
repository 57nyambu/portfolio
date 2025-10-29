import AnimatedSection from '../components/AnimatedSection';
import { Download, Briefcase, Award, Code } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                Resume
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Backend Engineer & DevOps Lead
              </p>
              <a href="/resume.pdf" download>
                <button className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 shadow-lg">
                  <Download size={20} />
                  <span>Download Full Resume</span>
                </button>
              </a>
            </div>

            {/* Core Competencies */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="text-accent" size={32} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Core Competencies
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Backend Development</h3>
                    <p className="text-gray-600">
                      Django, Django REST Framework, Flask, Python, RESTful APIs
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Frontend Development</h3>
                    <p className="text-gray-600">
                      React, TypeScript, Tailwind CSS, Modern UI/UX
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">DevOps & Cloud</h3>
                    <p className="text-gray-600">
                      Azure, DigitalOcean, CI/CD, Docker, Nginx, Gunicorn, systemd
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Database Management</h3>
                    <p className="text-gray-600">
                      PostgreSQL, Redis, MongoDB, Query Optimization
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="text-accent" size={32} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Education & Certifications
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      Bachelor of Science in Information Technology
                    </h3>
                    <p className="text-gray-600">Kenyatta University • Nairobi, Kenya</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      DevOps & Cloud Engineering Training
                    </h3>
                    <p className="text-gray-600">Moringa School</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      Linux Systems Administration
                    </h3>
                    <p className="text-gray-600">
                      Self-taught • Nearly 2 years of hands-on experience with Ubuntu server
                      administration
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Experience */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-6 sm:p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Briefcase className="text-accent" size={32} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Professional Experience
                  </h2>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Backend Engineer / DevOps Lead
                  </h3>
                  <p className="text-gray-600 mb-4">Remote Startup • 5 months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Led full backend design and deployment for the startup's MVP
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Implemented CI/CD pipelines with automated testing and Telegram
                        notifications
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Configured server automation, scaling, and security across multiple
                        DigitalOcean droplets
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Training new recruits to handle system maintenance as part of transition
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.5}>
              <div className="text-center bg-primary text-white rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-2">Email: mwakionyambu57@gmail.com</p>
                <p className="mb-4">GitHub: github.com/57nyambu</p>
                <p className="text-sm text-gray-300">
                  Currently preparing for Azure Cloud certification
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Resume;
