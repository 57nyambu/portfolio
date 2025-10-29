import AnimatedSection from '../components/AnimatedSection';
import { Code, Cloud, Database, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend',
      icon: Code,
      items: ['Django', 'Django REST Framework', 'Flask', 'Python'],
    },
    {
      category: 'Frontend',
      icon: Code,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['Azure', 'DigitalOcean', 'Ubuntu Server', 'Nginx', 'Gunicorn'],
    },
    {
      category: 'Database & Tools',
      icon: Database,
      items: ['PostgreSQL', 'Redis', 'MongoDB', 'Git'],
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto flow-lg">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-extrabold gradient-brand mb-8 text-center tracking-tight">
              About Me
            </h1>

            {/* Bio Section */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a <span className="font-semibold text-primary">Full Stack Developer</span> and{' '}
                <span className="font-semibold text-primary">DevOps Engineer</span> with a passion
                for building scalable systems and automating infrastructure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I completed specialized training at{' '}
                <span className="font-semibold text-accent">Moringa School</span> in DevOps and
                Cloud Engineering, and hold a{' '}
                <span className="font-semibold">Bachelor of Science in Information Technology</span>{' '}
                from Kenyatta University.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans building full-stack eCommerce platforms, financial management
                systems, and custom CI/CD tools. I manage cloud infrastructures on{' '}
                <span className="font-semibold">Azure</span> and{' '}
                <span className="font-semibold">DigitalOcean</span>, with expertise in Django, React,
                PostgreSQL, and automated deployment pipelines.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-brand mb-8 text-center tracking-tight">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={skill.category} delay={0.1 * index}>
                  <div className="glass-card p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <skill.icon className="text-accent" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{skill.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-gray-600 flex items-center space-x-2">
                          <GitBranch size={16} className="text-accent" />
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

        {/* Experience Highlight */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-brand mb-8 text-center tracking-tight">
              Experience Highlights
            </h2>
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                Backend Engineer / DevOps Lead
              </h3>
              <p className="text-gray-600 mb-4">Remote Startup • 5 months</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Led full backend design and deployment for the startup's MVP</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Implemented CI/CD pipelines and monitoring with Telegram integration
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Configured server automation, scaling, and security across multiple droplets
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Training new recruits for system maintenance and handover</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
