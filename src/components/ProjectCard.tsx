import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 20px 40px rgba(11, 40, 76, 0.15)',
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
    >
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm bg-accent/10 text-accent rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
            >
              <ExternalLink size={20} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
