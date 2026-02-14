import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export function Header() {
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

  return (
    <>
      <header className={`${isHomePage ? 'bg-white' : 'bg-[#ffd100]'} py-6 px-8`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={import.meta.env.BASE_URL + 'logo.svg'} 
              alt="Logo" 
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback logo using SVG
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,' + encodeURIComponent(`
                  <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10 L20 60 M20 10 L35 20 L35 70 M35 35 L50 45 L50 25 L35 35" 
                      stroke="#2C2C2C" stroke-width="3" fill="none" stroke-linejoin="bevel"/>
                    <path d="M20 10 L35 20 M20 35 L35 45 M35 20 L50 30 M35 45 L50 35" 
                      stroke="#ffd100" stroke-width="2" fill="none"/>
                  </svg>
                `);
              }}
            />
          </Link>
          <nav className="flex gap-12">
            {!isHomePage && (
              <Link 
                to="/" 
                className="text-lg hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
            )}
            <Link 
              to="/about" 
              className="text-lg hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Sticky scroll bar */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[#ffd100] py-4 px-8 shadow-md z-50 transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={import.meta.env.BASE_URL + 'logo.svg'} 
              alt="Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,' + encodeURIComponent(`
                  <svg width="50" height="60" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10 L20 60 M20 10 L35 20 L35 70 M35 35 L50 45 L50 25 L35 35" 
                      stroke="#2C2C2C" stroke-width="3" fill="none" stroke-linejoin="bevel"/>
                    <path d="M20 10 L35 20 M20 35 L35 45 M35 20 L50 30 M35 45 L50 35" 
                      stroke="#ffd100" stroke-width="2" fill="none"/>
                  </svg>
                `);
              }}
            />
          </Link>
          <nav className="flex gap-12">
            {!isHomePage && (
              <Link 
                to="/" 
                className="text-lg hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
            )}
            <Link 
              to="/about" 
              className="text-lg hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}