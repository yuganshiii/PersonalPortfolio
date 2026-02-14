import { motion } from 'framer-motion';

const FilterTabs = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="bg-primary py-3 px-4 rounded-lg mb-12 shadow-sm">
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <motion.button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? 'bg-foreground text-white'
                : 'bg-white text-foreground hover:bg-white/90'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
