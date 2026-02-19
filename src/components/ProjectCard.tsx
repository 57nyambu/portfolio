import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="project-card-wrapper"
    >
      <div className="project-card">
        {/* Animated background gradient */}
        <motion.div 
          className="card-bg-gradient"
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Top section with category */}
        <div className="card-top">
          {project.category && (
            <motion.div 
              className="category-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Code2 size={14} strokeWidth={2.5} />
              <span>{project.category}</span>
            </motion.div>
          )}
          
          <motion.div
            className="sparkle-icon"
            animate={{
              rotate: isHovered ? 180 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={20} />
          </motion.div>
        </div>

        {/* Title Section */}
        <div className="title-section">
          <h3 className="project-title">{project.title}</h3>
          <motion.div 
            className="title-accent-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          />
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-section">
          <div className="section-label">
            <Layers size={14} />
            <span>Tech Stack</span>
          </div>
          <div className="tech-stack-grid">
            {project.stack.map((tech, idx) => (
              <motion.span
                key={tech}
                className="tech-badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 + 0.4 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="description-section">
          <p className="project-description">{project.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="actions-section">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button primary-button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} strokeWidth={2.5} />
              <span>View Live</span>
              <div className="button-shine" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button secondary-button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={18} strokeWidth={2.5} />
              <span>Source</span>
            </motion.a>
          )}
        </div>

        {/* Decorative elements */}
        <div className="card-corner-tl" />
        <div className="card-corner-br" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;