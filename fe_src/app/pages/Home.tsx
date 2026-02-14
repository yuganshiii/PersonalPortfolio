import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['ALL CATEGORIES', 'DATA VISUALIZATION', 'CREATIVE CODING', 'DATA SCIENCE'];

const projects = [
  {
    id: 1,
    title: 'Heart Data Visualization',
    category: 'DATA VISUALIZATION',
    image: 'https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldHdvcmslMjBoZWFydHxlbnwxfHx8fDE3NzEwMzAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Network Graph',
    category: 'DATA VISUALIZATION',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  },
  {
    id: 3,
    title: 'Generative Art',
    category: 'CREATIVE CODING',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
  },
  {
    id: 4,
    title: 'ML Model',
    category: 'DATA SCIENCE',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
  },
];

export function Home() {
  const [activeCategory, setActiveCategory] = useState('ALL CATEGORIES');

  const filteredProjects = activeCategory === 'ALL CATEGORIES'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <motion.h1 
          className="text-6xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hannah Yan Han
        </motion.h1>
        <motion.div 
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="h-1 w-24 bg-[#D98880] rounded-full"></div>
          <div className="h-3 w-3 bg-[#D98880] rounded-full mx-2"></div>
          <div className="h-1 w-24 bg-[#D98880] rounded-full"></div>
        </motion.div>
        <motion.p 
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hello! Glad to see you here. This is a collection of my personal projects made<br />
          during free time.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="bg-[#ffd100] p-6 rounded-sm flex items-center justify-center gap-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm tracking-wide transition-all ${
                activeCategory === category
                  ? 'text-black font-medium'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-b-2 border-[#D98880] pb-2">
                  <h3 className="text-lg">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
}