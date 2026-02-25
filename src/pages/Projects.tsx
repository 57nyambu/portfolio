import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactElement } from 'react';
import {
  Layers,
  Filter,
  Briefcase,
  ExternalLink,
  Radio,
  Clock,
  FileSearch,
  Lock,
  Info,
} from 'lucide-react';
import { projects, categories, siteNote } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

// ─── Status Badge ────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status?: string }) => {
  if (!status) return null;

  const config: Record<string, { icon: ReactElement; color: string; bg: string }> = {
    Live: {
      icon: <Radio size={10} />,
      color: '#4ade80',
      bg: 'rgba(74, 222, 128, 0.1)',
    },
    'In Progress': {
      icon: <Clock size={10} />,
      color: '#facc15',
      bg: 'rgba(250, 204, 21, 0.1)',
    },
    'Proof on Demand': {
      icon: <FileSearch size={10} />,
      color: '#94a3b8',
      bg: 'rgba(148, 163, 184, 0.1)',
    },
  };

  const c = config[status] ?? config['Proof on Demand'];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: c.color,
        background: c.bg,
        border: `1px solid ${c.color}33`,
        borderRadius: '999px',
        padding: '2px 8px',
      }}
    >
      {c.icon}
      {status}
    </span>
  );
};

// ─── Restricted Badge ────────────────────────────────────────────────────────
const RestrictedBadge = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: '#f87171',
      background: 'rgba(248, 113, 113, 0.08)',
      border: '1px solid rgba(248, 113, 113, 0.2)',
      borderRadius: '999px',
      padding: '2px 8px',
    }}
  >
    <Lock size={10} />
    Restricted
  </span>
);

// ─── Enhanced Card Wrapper ───────────────────────────────────────────────────
const EnhancedProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    style={{ position: 'relative' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Meta row: status + restricted + visit link */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
        paddingInline: '2px',
        flexWrap: 'wrap',
        gap: '6px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        <StatusBadge status={project.status} />
        {project.restricted && <RestrictedBadge />}
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="section-eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem',
            textDecoration: 'none',
          }}
        >
          <ExternalLink size={11} />
          <span>Visit</span>
        </a>
      )}
    </div>

    <ProjectCard project={project} index={index} />
  </motion.div>
);

// ─── Site Note Banner ────────────────────────────────────────────────────────
const SiteNoteBanner = ({ note }: { note: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      background: 'rgba(148, 163, 184, 0.06)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      borderRadius: '10px',
      padding: '12px 16px',
      marginBottom: '2rem',
    }}
  >
    <Info size={15} style={{ color: '#94a3b8', marginTop: '2px', flexShrink: 0 }} />
    <p
      style={{
        margin: 0,
        fontSize: '0.82rem',
        color: '#94a3b8',
        lineHeight: 1.6,
        letterSpacing: '0.01em',
      }}
    >
      {note}
    </p>
  </motion.div>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
          Showing {filteredProjects.length}{' '}
          {filteredProjects.length === 1 ? 'project' : 'projects'}
        </motion.div>

        {/* Site Note */}
        <SiteNoteBanner note={siteNote} />

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
                <EnhancedProjectCard key={project.title} project={project} index={index} />
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
