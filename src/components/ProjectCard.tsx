import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-card"
    >
      {/* Content */}
      <div className="project-card-content">
        {project.category && (
          <span className="project-card-category">{project.category}</span>
        )}

        <h3 className="project-card-title">{project.title}</h3>

        <p className="project-card-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-card-tech">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link project-card-link--primary"
            >
              <ExternalLink size={14} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link project-card-link--secondary"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="project-card-link project-card-link--secondary" style={{ cursor: 'default', opacity: 0.6 }}>
              <Layers size={14} />
              Available on request
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
