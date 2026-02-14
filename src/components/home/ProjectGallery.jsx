import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import FilterTabs from '../ui/FilterTabs';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'ML/AI', value: 'ml-ai' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'Data Engineering', value: 'data-engineering' },
  { label: 'Software', value: 'swe' },
];

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my work in machine learning, data science, and software engineering"
    >
      <FilterTabs
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.p
          className="text-center text-text-secondary mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found in this category.
        </motion.p>
      )}
    </Section>
  );
};

export default ProjectGallery;
