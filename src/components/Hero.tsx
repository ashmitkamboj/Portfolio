import React from 'react';
import { ArrowRight, Code, Brain, Database, Globe, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium transform transition-transform duration-500 hover:scale-105 perspective-1000 hover:rotate-1">
                <Cpu className="w-4 h-4 mr-2" />
                Full Stack Developer & AI/ML Enthusiast
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="transform transition-all duration-700 hover:rotate-2 inline-block perspective-1000">
                  Hi, I'm Ashmit
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Building intelligent web applications with{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold transform transition-all duration-300 hover:scale-110 inline-block">
                  MERN Stack
                </span>{' '}
                and{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold transform transition-all duration-300 hover:scale-110 inline-block">
                  AI/ML
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl perspective-1000 hover:rotate-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 perspective-1000 hover:-rotate-1"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 perspective-1000">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                  <Code className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    MERN Stack
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Building full-stack web applications
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:-rotate-2 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                  <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    AI/ML
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Machine learning & data science
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:rotate-2 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                  <Database className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Backend
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    RESTful APIs & database design
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:-rotate-1 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                  <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
    </section>
  );
};

export default Hero;
