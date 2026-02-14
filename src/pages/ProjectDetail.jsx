import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from '../components/ui/Icons';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-accent-primary hover:text-accent-hover">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-width max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </motion.div>

        {/* Thumbnail placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="h-64 md:h-96 bg-gradient-to-br from-accent-subtle to-accent-primary/20 rounded-xl flex items-center justify-center">
            <div className="text-6xl font-heading text-accent-primary">
              {project.title.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            The Problem
          </h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line">
            {project.problem}
          </div>
        </motion.section>

        {/* The Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            The Approach
          </h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line">
            {project.approach}
          </div>
        </motion.section>

        {/* Results & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Results & Impact
          </h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line">
            {project.results}
          </div>
        </motion.section>

        {/* Links */}
        {(project.github || project.demo || project.blog) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button variant="secondary" href={project.github}>
                  <Github className="w-5 h-5 inline mr-2" />
                  View on GitHub
                </Button>
              )}
              {project.demo && (
                <Button href={project.demo}>
                  <ExternalLink className="w-5 h-5 inline mr-2" />
                  Live Demo
                </Button>
              )}
              {project.blog && (
                <Button variant="secondary" href={project.blog}>
                  Read More
                </Button>
              )}
            </div>
          </motion.section>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-between items-center pt-12 border-t border-border-light"
        >
          {prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs">Previous</div>
                <div className="font-medium">{prevProject.title.substring(0, 30)}...</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
            >
              <div className="text-right">
                <div className="text-xs">Next</div>
                <div className="font-medium">{nextProject.title.substring(0, 30)}...</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
