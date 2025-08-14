import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
              AK
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Ashmit Kamboj
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-full hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            {[
              { Icon: Github, href: 'https://github.com/ashmitkamboj', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/ashmit-kamboj-1b2642281/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:ashmitkamboj.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;