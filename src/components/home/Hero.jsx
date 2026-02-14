import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowDown } from '../ui/Icons';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Yuganshi Agrawal
          </h1>

          {/* Decorative divider with coral circles */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-16 h-0.5 bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-foreground/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Data Scientist · ML Engineer · Software Developer
          </motion.p>

          <motion.p
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building intelligent systems at the intersection of machine learning,
            data science, and software engineering. Currently pursuing MS in Data Science at University of Michigan.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button
              variant="secondary"
              href="/PersonalPortfolio/Yuganshi's Resume Final.pdf"
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <button
            onClick={scrollToProjects}
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
