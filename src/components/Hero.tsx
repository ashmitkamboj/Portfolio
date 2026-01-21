import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Brain, Database, Globe, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform -rotate-12 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" style={{ transform: `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px)` }}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-lg">
                <Cpu className="w-4 h-4 mr-2" />
                Full Stack Developer & AI/ML Enthusiast
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="transform transition-all duration-700 hover:rotate-3 inline-block hover:scale-110 cursor-default">
                  Hi, I'm Ashmit
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Building intelligent web applications with{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold transform transition-all duration-300 hover:scale-110 hover:-rotate-1 inline-block cursor-default">
                  MERN Stack
                </span>{' '}
                and{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold transform transition-all duration-300 hover:scale-110 hover:rotate-1 inline-block cursor-default">
                  AI/ML
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:-rotate-1"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative" style={{ transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)` }}>
            <div className="grid grid-cols-2 gap-6 perspective-1000">
              <div className="space-y-6">
                <div 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-4 preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Code className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4 transform transition-transform duration-300 hover:rotate-12 hover:scale-125" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transform transition-transform duration-300 hover:translate-z-4">
                    MERN Stack
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Building full-stack web applications
                  </p>
                </div>

                <div 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:-rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-4 preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 transform transition-transform duration-300 hover:rotate-12 hover:scale-125" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transform transition-transform duration-300 hover:translate-z-4">
                    AI/ML
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Machine learning & data science
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-4 preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Database className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 transform transition-transform duration-300 hover:rotate-12 hover:scale-125" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transform transition-transform duration-300 hover:translate-z-4">
                    Backend
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    RESTful APIs & database design
                  </p>
                </div>

                <div 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:-rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-4 preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 transform transition-transform duration-300 hover:rotate-12 hover:scale-125" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transform transition-transform duration-300 hover:translate-z-4">
                    Web Dev
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Modern responsive applications
                  </p>
                </div>
              </div>
            </div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
