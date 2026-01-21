import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 5;
      const y = (e.clientY / window.innerHeight - 0.5) * 5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 perspective-1000">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="flex items-center justify-between h-16"
          style={{ transform: `rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg)` }}
        >
          <a
            href="#home"
            className="flex items-center space-x-2 group perspective-1000 preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 hover:shadow-lg">
              <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white transform transition-all duration-500 group-hover:rotate-3 hover:scale-110">
              Dev
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-110 hover:rotate-2 perspective-1000 preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-300 transform hover:scale-125 hover:rotate-360 hover:shadow-lg preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-300 transform hover:scale-125 hover:rotate-360 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:rotate-180 hover:scale-125 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in-down">
          <div className="px-4 py-4 space-y-2 perspective-1000">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 transform hover:translate-x-4 hover:scale-110 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
