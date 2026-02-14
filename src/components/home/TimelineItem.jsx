import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center mb-12 last:mb-0"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 bg-accent-primary rounded-full border-4 border-bg-primary z-10"></div>
        {index !== 4 && <div className="w-0.5 h-full bg-accent-subtle mt-2"></div>}
      </div>

      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <div className="bg-bg-card p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300">
          <span className="text-sm font-mono text-accent-primary">{item.year}</span>
          <h3 className="text-xl font-heading font-semibold text-text-primary mt-2 mb-1">
            {item.title}
          </h3>
          <p className="text-md font-medium text-text-secondary mb-3">
            {item.organization} · {item.location}
          </p>
          <p className="text-text-secondary mb-4 text-sm leading-relaxed">
            {item.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
            {item.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
