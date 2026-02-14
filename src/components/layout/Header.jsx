import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-card shadow-soft backdrop-blur-sm bg-opacity-95' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-width py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl font-semibold text-text-primary hover:text-accent-primary transition-colors">
            YA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
