import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const ProjectGallery = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my work in machine learning, data science, and software engineering"
      className="bg-white"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default ProjectGallery;
