import React, { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
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

  const certifications = [
    {
      id: 1,
      title: 'MongoDB Developer Associate',
      issuer: 'MongoDB University',
      date: '2024',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      credentialUrl: 'https://example.com/mongodb',
      description: 'Comprehensive knowledge of MongoDB database design, aggregation, and CRUD operations',
    },
    {
      id: 2,
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2024',
      image: 'https://www.gstatic.com/devrel-devsite/prod/vd2778d7f9f2d084f3523573228021f94349b864d1a6d2e8684059526658422b2/tensorflow/images/tf_logo_social.png',
      credentialUrl: 'https://example.com/tensorflow',
      description: 'Building and training neural networks using TensorFlow for real-world applications',
    },
    {
      id: 3,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      credentialUrl: 'https://example.com/aws',
      description: 'Developing and maintaining applications on AWS cloud infrastructure',
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera (Andrew Ng)',
      date: '2023',
      image: 'https://d3njjcbhbojot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/icons/favicons/favicon-v2.ico?auto=format%2Ccompress&dpr=1&w=288&h=288&fit=crop',
      credentialUrl: 'https://example.com/ml-specialization',
      description: 'Deep learning and machine learning fundamentals with hands-on projects',
    },
    {
      id: 5,
      title: 'Meta React Native',
      issuer: 'Meta',
      date: '2023',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      credentialUrl: 'https://example.com/react-native',
      description: 'Building cross-platform mobile applications using React Native',
    },
    {
      id: 6,
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
      credentialUrl: 'https://example.com/python-ds',
      description: 'Data analysis, visualization, and machine learning with Python',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 perspective-1000 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-60 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-60 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transform transition-all duration-700 hover:scale-110 hover:rotate-2 cursor-default">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6 transform transition-all duration-500 hover:scale-125 hover:rotate-3"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications validating my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 preserve-3d"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d',
                transform: `rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(${index * 5}px)`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-125 hover:shadow-xl">
                  <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="transform transition-transform duration-300 hover:rotate-12" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 transform transition-transform duration-300 hover:translate-z-2">
                {cert.title}
              </h3>

              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3 transform transition-transform duration-300 hover:scale-105">
                {cert.issuer}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-all duration-300 transform hover:translate-x-3 hover:scale-110 hover:rotate-3"
              >
                <ExternalLink size={14} className="mr-2" />
                View Credential
              </a>
            </div>
          ))}
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

export default Certifications;
