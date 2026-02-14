import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
    <>
      <header className={`${isHomePage ? 'bg-white' : 'bg-primary'} py-6 px-8`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.location.href = '/PersonalPortfolio/'}
            className="text-2xl font-medium hover:opacity-70 transition-opacity"
          >
            YA
          </button>

          <nav className="flex gap-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Sticky scroll header */}
      <div
        className={`fixed top-0 left-0 right-0 bg-primary py-4 px-8 shadow-md z-50 transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.location.href = '/PersonalPortfolio/'}
            className="text-xl font-medium hover:opacity-70 transition-opacity"
          >
            Yuganshi Agrawal
          </button>
          <nav className="flex gap-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
