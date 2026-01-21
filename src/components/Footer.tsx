import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
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

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div 
          className="grid md:grid-cols-3 gap-8 mb-8 preserve-3d"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-4 transform transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-default">
              Ashmit Kamboj
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & AI/ML Enthusiast building modern web applications with MERN stack and machine learning.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:translate-x-3 hover:scale-110 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:translate-x-3 hover:scale-110 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:translate-x-3 hover:scale-110 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:translate-x-3 hover:scale-110 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ashmitkamboj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-xl preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashmit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-xl preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ashmit@example.com"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-xl preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ashmit Kamboj. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 transform transition-all duration-500 hover:scale-150 hover:rotate-12 hover:shadow-lg" />{' '}
              and React
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
