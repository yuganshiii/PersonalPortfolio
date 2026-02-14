import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { skills } from '../../data/skills';

const SkillCategory = ({ title, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-bg-card p-6 rounded-xl shadow-soft"
    >
      <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-accent-subtle text-text-primary text-sm rounded-md hover:bg-accent-primary hover:text-white transition-colors duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    { title: 'Programming Languages', items: skills.languages },
    { title: 'Frameworks & Libraries', items: skills.frameworks },
    { title: 'Data & Analytics', items: skills.data },
    { title: 'Machine Learning & AI', items: skills.ml },
    { title: 'Tools & Platforms', items: skills.tools },
    { title: 'Databases', items: skills.databases },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="A comprehensive toolkit for data science, machine learning, and software development"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            items={category.items}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
