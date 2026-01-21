import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with MERN stack. Features include user authentication, product management, shopping cart, payment integration, and order tracking with real-time updates.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      date: '2024',
      featured: true,
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, drag-and-drop interface, team collaboration features, and productivity analytics dashboard.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind'],
      liveUrl: 'https://example-taskapp.com',
      githubUrl: 'https://github.com/johndoe/task-manager',
      date: '2024',
      featured: true,
      category: 'Full Stack',
    },
    {
      id: 3,
      title: 'AI Image Classifier',
      description: 'Deep learning model for image classification using Convolutional Neural Networks. Built with TensorFlow and trained on custom dataset with 95% accuracy.',
      image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Flask'],
      liveUrl: 'https://example-ai-classifier.com',
      githubUrl: 'https://github.com/johndoe/ai-image-classifier',
      date: '2024',
      featured: true,
      category: 'AI/ML',
    },
    {
      id: 4,
      title: 'Social Network API',
      description: 'Complete REST API for a social networking platform with user authentication, posts, comments, likes, and real-time notifications.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
      liveUrl: 'https://example-social-api.com',
      githubUrl: 'https://github.com/johndoe/social-network-api',
      date: '2024',
      featured: false,
      category: 'Full Stack',
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-default">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my full-stack and AI/ML projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 preserve-3d"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d',
                transform: `rotateX(${mousePosition.y * -0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(${index * 10}px)`
              }}
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transform transition-transform duration-500 group-hover:translate-z-4"></div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                      project.category === 'AI/ML'
                        ? 'bg-purple-500 text-white'
                        : 'bg-indigo-500 text-white'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="transform transition-transform duration-300 hover:rotate-12" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 transform transition-transform duration-300 hover:translate-z-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-md transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                    >
                      <Tag size={10} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md transform transition-all duration-300 hover:scale-110">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-xl"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 hover:-rotate-2 hover:shadow-xl"
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 transform transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-default">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 preserve-3d"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 transform transition-transform duration-300 hover:translate-z-2">
                    {project.title}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium transition-colors duration-200 transform hover:scale-110 hover:rotate-6"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200 transform hover:scale-110 hover:-rotate-6"
                  >
                    <Github size={12} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/ashmitkamboj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-3xl"
          >
            <Github size={16} className="mr-2" />
            View All Projects on GitHub
          </a>
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

export default Projects;
