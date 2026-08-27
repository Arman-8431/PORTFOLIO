import React, { useState } from 'react';
import { Folder, Github, ExternalLink, Eye, Star } from 'lucide-react';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Folder size={24} className="text-gray-900 dark:text-white" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group overflow-hidden rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  {project.status === 'Live' && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      {project.status}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center space-x-3">
                  <div className="flex items-center space-x-1 bg-white/90 dark:bg-black/90 px-2 py-1 rounded text-xs">
                    <Eye size={12} />
                    <span>{project.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/90 dark:bg-black/90 px-2 py-1 rounded text-xs">
                    <Star size={12} />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-md text-base font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github size={20} className="mr-2" />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
