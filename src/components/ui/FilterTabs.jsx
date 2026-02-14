import { motion } from 'framer-motion';

const FilterTabs = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter.value
              ? 'bg-accent-primary text-white shadow-soft'
              : 'bg-bg-secondary text-text-secondary hover:bg-accent-subtle hover:text-accent-primary'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;
