import { motion } from 'framer-motion';
import Section from '../layout/Section';

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      className="bg-bg-secondary"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-text-secondary leading-relaxed"
        >
          <p>
            I'm a Data Science graduate student at the <span className="text-text-primary font-medium">University of Michigan</span> with
            a perfect 4.0 GPA, passionate about building intelligent systems that solve real-world problems. My journey
            in tech began with a Bachelor's in Computer Science from MNIT Jaipur, and has evolved through roles at{' '}
            <span className="text-text-primary font-medium">Wells Fargo</span> and an AI startup.
          </p>

          <p>
            What excites me most is the intersection of <span className="text-text-primary font-medium">machine learning theory and practical application</span>.
            Whether it's building graph neural networks for recommendation systems, implementing causal ML for stock prediction,
            or developing NLP pipelines for narrative analysis, I love tackling complex problems that push the boundaries
            of what's possible with data and AI.
          </p>

          <p>
            Beyond the technical work, I'm driven by the impact these systems can have. From helping farmers optimize
            crop selection through satellite imagery analysis to improving financial forecasting with robust ML models,
            I believe in using technology to create meaningful change.
          </p>

          <p className="text-accent-primary font-medium">
            Currently seeking full-time opportunities in Data Science, Machine Learning Engineering, and Software Engineering
            where I can apply my skills to solve challenging problems and continue growing as a technologist.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
