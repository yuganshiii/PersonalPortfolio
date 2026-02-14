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
        <div className="bg-white overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col border-b-4 border-b-accent">
          {/* Thumbnail placeholder with 4:3 aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-400">
                {project.title.charAt(0)}
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-foreground/70 mb-4 flex-grow text-sm">
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

            <div className="flex items-center text-accent font-medium text-sm">
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
