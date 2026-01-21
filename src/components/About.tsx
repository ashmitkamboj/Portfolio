import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-40 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-default">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" style={{ transform: `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px)` }}>
            <div 
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-3xl hover:-translate-y-2 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transform transition-transform duration-300 hover:translate-z-4">
                I'm a passionate Full Stack Developer with expertise in MERN stack and a growing interest in Artificial Intelligence and Machine Learning. I love building modern web applications that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 transform transition-all duration-300 hover:scale-150 hover:rotate-180"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized in building full-stack applications using MongoDB, Express.js, React.js, and Node.js
                </p>
              </div>
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 transform transition-all duration-300 hover:scale-150 hover:rotate-180"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Exploring AI/ML technologies including TensorFlow, PyTorch, and scikit-learn
                </p>
              </div>
              <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-4 hover:scale-105 cursor-default">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 transform transition-all duration-300 hover:scale-150 hover:rotate-180"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Passionate about creating scalable APIs and efficient database solutions
                </p>
              </div>
            </div>
          </div>

          <div 
            className="grid grid-cols-2 gap-6 perspective-1000"
            style={{ transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)` }}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-3 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 transform transition-all duration-300 hover:scale-125 hover:rotate-6">3+</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Years of Experience</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:-rotate-6 hover:scale-110 hover:shadow-3xl hover:-translate-y-3 preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 transform transition-all duration-300 hover:scale-125 hover:-rotate-6">15+</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:rotate-3 hover:scale-110 hover:shadow-3xl hover:-translate-y-3 preserve-3d mt-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 transform transition-all duration-300 hover:scale-125 hover:rotate-3">10+</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">AI/ML Models</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:-rotate-3 hover:scale-110 hover:shadow-3xl hover:-translate-y-3 preserve-3d mt-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transform transition-all duration-300 hover:scale-125 hover:-rotate-3">5+</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Certifications</p>
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
      `}</style>
    </section>
  );
};

export default About;
