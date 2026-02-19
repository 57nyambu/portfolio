import AnimatedSection from '../components/AnimatedSection';
import { Code, Cloud, Database, GitBranch, Shield, Building2, Globe, Cpu, CheckCircle } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend Engineering',
      icon: Code,
      items: ['Django & DRF', 'Flask', 'Python', 'RESTful APIs', 'JWT Authentication'],
    },
    {
      category: 'Frontend Development',
      icon: Cpu,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Modern UI/UX'],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['Azure (IaaS)', 'DigitalOcean', 'Nginx', 'Gunicorn', 'CI/CD Pipelines', 'Docker'],
    },
    {
      category: 'Databases & Tools',
      icon: Database,
      items: ['PostgreSQL', 'Redis', 'MongoDB', 'Git', 'Linux Administration'],
    },
    {
      category: 'Fintech & Compliance',
      icon: Shield,
      items: ['ISO 20022', 'Tazama (AML/CFT)', 'Payment Gateways', 'Transaction Monitoring', 'KRA Integration'],
    },
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      items: ['Multi-tenant SaaS', 'eCommerce Platforms', 'ERP Systems', 'PDF Generation', 'Business Registration'],
    },
  ];

  const experiences = [
    {
      title: 'Backend Engineer / DevOps Lead',
      company: 'Remote Startup',
      period: '5 months',
      highlights: [
        'Led full backend design and deployment for the startup\'s MVP using Django & DRF',
        'Implemented CI/CD pipelines with automated testing, deployment, and Telegram/email notifications',
        'Configured server automation, scaling, and security across multiple DigitalOcean droplets',
        'Designed RESTful API architecture serving multiple client applications',
        'Trained new recruits for system maintenance and operational handover',
      ],
    },
    {
      title: 'Fintech Integration Engineer',
      company: 'Client Project — Inter-continental Transactions',
      period: 'Contract',
      highlights: [
        'Implemented integration with Tazama, an open-source transaction monitoring and fraud detection system for real-time AML/CFT compliance',
        'Worked with ISO 20022 messaging standards for cross-border and international payment processing',
        'Designed and deployed transaction screening pipelines for clients handling inter-continental and international fund transfers',
        'Ensured compliance with regulatory frameworks for financial institutions operating across multiple jurisdictions',
        'Proof of work and documentation available on demand',
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
                Building Enterprise-Grade Solutions
              </h1>
              <p className="section-subheading">
                Full Stack Engineer and Cloud Architect specializing in fintech, enterprise platforms, and scalable cloud deployments.
              </p>
            </div>

            {/* Bio Section */}
            <div className="glass-card-dark p-6 sm:p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> and{' '}
                <span className="text-blue-400 font-semibold">Cloud Architect</span> with deep expertise
                in building production systems for business, fintech, and enterprise clients.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I completed specialized training at{' '}
                <span className="text-purple-400 font-semibold">Moringa School</span> in DevOps and
                Cloud Engineering, and hold a{' '}
                <span className="text-slate-200 font-semibold">Bachelor of Science in Information Technology</span>{' '}
                from Kenyatta University.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                My expertise spans building full-stack eCommerce platforms, financial management
                systems, and enterprise tools—deployed on <span className="text-slate-200 font-semibold">Azure</span> and{' '}
                <span className="text-slate-200 font-semibold">DigitalOcean</span> with automated CI/CD pipelines, 
                security hardening, and scalable infrastructure.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I have hands-on experience with <span className="text-emerald-400 font-semibold">ISO 20022</span> payment 
                messaging standards and <span className="text-emerald-400 font-semibold">Tazama</span>—an open-source 
                transaction monitoring and fraud detection system—supporting clients processing inter-continental 
                and international transactions with full regulatory compliance.
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
              <h2 className="section-heading-sm">
                Technical Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={skill.category} delay={0.1 * index}>
                  <div className="glass-card-dark p-6 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="icon-box">
                        <skill.icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">{skill.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-slate-400 flex items-center space-x-2 text-sm">
                          <GitBranch size={14} className="text-blue-400 flex-shrink-0" />
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
              <h2 className="section-heading-sm">
                Professional Background
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <AnimatedSection key={idx} delay={0.1 * idx}>
                  <div className="glass-card-dark p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-slate-500 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-slate-300">
                          <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
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
