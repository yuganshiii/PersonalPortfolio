import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { ArrowRight } from '../ui/Icons';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <motion.div
          className="bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col border-b-4 border-b-accent"
          whileHover={{ borderBottomWidth: '6px' }}
        >
          {/* Thumbnail with 4:3 aspect ratio */}
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-3xl font-bold text-gray-400">
                {project.title.charAt(0)}
              </div>
            </motion.div>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>

            <p className="text-foreground/70 mb-3 flex-grow text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.techStack.slice(0, 2).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
              {project.techStack.length > 2 && (
                <Badge>+{project.techStack.length - 2}</Badge>
              )}
            </div>

            <div className="flex items-center text-accent font-medium text-xs">
              <span className="mr-1">View Project</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
