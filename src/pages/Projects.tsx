import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Filter, Briefcase } from 'lucide-react';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

// Main Projects Component
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="portfolio-projects">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="header-wrapper"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-eyebrow" style={{ display: 'inline-flex' }}>
            <Briefcase size={16} />
            <span>Portfolio</span>
          </div>
          <h1 className="main-heading">Featured Projects</h1>
          <p className="subtitle-text">
            Enterprise platforms, fintech solutions, DevOps automation, and cloud-deployed 
            systems — demonstrating end-to-end engineering from architecture to production.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div 
          className="filter-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="filter-label">
            <Filter size={16} strokeWidth={2.5} />
            <span>Filter</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.div
          className="project-count-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              className="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Layers size={64} className="empty-icon" strokeWidth={1.5} />
              <p className="empty-text">No projects found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;