import AnimatedSection from '../components/AnimatedSection';
import { Code, Cloud, Database, GitBranch, Shield, Building2, Globe, Cpu, CheckCircle, ExternalLink } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend Engineering',
      icon: Code,
      items: ['Django & DRF', 'FastAPI', 'Flask', 'Python', 'RESTful APIs', 'JWT Authentication'],
    },
    {
      category: 'Frontend Development',
      icon: Cpu,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Modern UI/UX'],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['Azure (IaaS)', 'DigitalOcean', 'Docker', 'Nginx', 'Gunicorn', 'CI/CD Pipelines', 'Linux Administration'],
    },
    {
      category: 'Storage & Data',
      icon: Database,
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'MinIO (S3-compatible)', 'Query Optimization', 'Data Modeling'],
    },
    {
      category: 'Fintech & Compliance',
      icon: Shield,
      items: ['ISO 20022', 'Tazama (AML/CFT)', 'M-Pesa Integration', 'Payment Gateways', 'KRA Integration'],
    },
    {
      category: 'Platform Engineering',
      icon: Building2,
      items: ['Multi-tenant SaaS', 'eCommerce Platforms', 'Email Automation', 'Self-hosted Analytics', 'Business Registration'],
    },
  ];

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Lipana — Developer Payment Platform',
      link: 'https://lipana.dev',
      highlights: [
        'Integrated Tazama real-time fraud detection and transaction monitoring into the core payment workflow',
        'Implemented transaction pipelines aligned with ISO 20022 international financial messaging standards',
        'Configured and deployed MinIO (S3-compatible) object storage for secure, scalable backend asset management',
        'Collaborated with cross-functional teams to ensure system reliability, compliance, and data integrity',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Dima Platform — Multi-Tenant eCommerce',
      period: '2024 – Present',
      link: 'https://dima.co.ke',
      highlights: [
        'Designed and built a multi-tenant eCommerce platform using Django, DRF, and React',
        'Integrated M-Pesa payments, SMS & email notification pipelines, and real-time analytics',
        'Built secure REST APIs covering products, orders, user management, and tenant isolation',
        'Deployed and maintained infrastructure on cloud IaaS environments',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Jangara Mall — Client Project',
      period: '2025',
      link: 'https://jangara.tomnyambu.dev',
      highlights: [
        'Designed and delivered a complete full-stack platform from database architecture to production deployment',
        'Built bookings, utilities management, and vendor service workflows',
        'Handled backend (Django/DRF), frontend (React), and end-to-end cloud deployment',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'DevSend — Email Automation Tool',
      period: 'January 2025',
      link: null,
      highlights: [
        'Built a secure email scheduling and sending platform using FastAPI and the Resend API',
        'Implemented scheduled sends, rich HTML templates, bulk personalization, and API key rotation',
        'Included delivery logging, CSV export, admin authentication, and real-time search',
      ],
    },
  ];

  return (
    <div className="page-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto flow-lg">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Globe size={16} />
                <span>About</span>
              </div>
              <h1 className="section-heading">
                Building Production-Grade Systems
              </h1>
              <p className="section-subheading">
                Full Stack Developer specializing in fintech integration, multi-tenant platforms, and cloud infrastructure.
              </p>
            </div>

            {/* Bio Section */}
            <div className="glass-card-dark p-6 sm:p-8">
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm a <span style={{ color: 'var(--orange)', fontWeight: 600 }}>Full Stack Developer</span> with
                hands-on experience designing, building, and deploying production web applications end-to-end.
                I work across the full stack — Python backends, React frontends, and cloud infrastructure —
                with a focus on systems that are reliable, secure, and built to scale.
              </p>

              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I pursued a{' '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  BSc in Information Technology
                </span>{' '}
                at{' '}
                <span style={{ color: 'var(--orange)', fontWeight: 600 }}>
                  Taita Taveta University
                </span>.
              </p>

              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I manage production infrastructure running Dockerized services, self-hosted analytics via{' '}
                <span style={{ color: 'var(--orange)', fontWeight: 600 }}>Umami</span>,
                and object storage via <span style={{ color: 'var(--orange)', fontWeight: 600 }}>MinIO</span>.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                In fintech, I have direct experience integrating{' '}
                <span style={{ color: 'var(--orange)', fontWeight: 600 }}>Tazama</span> for real-time AML/CFT
                transaction monitoring and working with{' '}
                <span style={{ color: 'var(--orange)', fontWeight: 600 }}>ISO 20022</span> international payment
                messaging standards — supporting regulated transaction workflows.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Code size={16} />
                <span>Capabilities</span>
              </div>
              <h2 className="section-heading-sm">Technical Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={skill.category} delay={0.1 * index}>
                  <div className="glass-card-dark p-6 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="icon-box">
                        <skill.icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {skill.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center space-x-2 text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <GitBranch
                            size={14}
                            className="flex-shrink-0"
                            style={{ color: 'var(--orange)' }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto mt-20">
            <div className="text-center mb-12">
              <div className="section-eyebrow">
                <Building2 size={16} />
                <span>Experience</span>
              </div>
              <h2 className="section-heading-sm">Professional Background</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <AnimatedSection key={idx} delay={0.1 * idx}>
                  <div className="glass-card-dark p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium" style={{ color: 'var(--orange)' }}>
                            {exp.company}
                          </p>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'var(--gray)', display: 'inline-flex', alignItems: 'center' }}
                            >
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                      <span
                        className="text-sm mt-1 sm:mt-0 whitespace-nowrap"
                        style={{ color: 'var(--gray)' }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <CheckCircle
                            size={18}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--orange)' }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
