import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { ArrowRight } from '../ui/Icons';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="bg-bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 h-full flex flex-col">
          {/* Thumbnail placeholder */}
          <div className="h-48 bg-gradient-to-br from-accent-subtle to-accent-primary/20 flex items-center justify-center">
            <div className="text-4xl font-heading text-accent-primary">
              {project.title.charAt(0)}
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-text-secondary mb-4 flex-grow line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge>+{project.techStack.length - 3}</Badge>
              )}
            </div>

            <div className="flex items-center text-accent-primary font-medium">
              <span className="mr-2">View Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
