import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Briefcase size={24} className="text-gray-900 dark:text-white" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>
        </div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="p-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-9">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">{exp.type}</span>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <TrendingUp size={16} />
                      <span>Impact</span>
                    </h4>
                    <div className="space-y-3">
                      {exp.impact.map((item, idx) => (
                        <div key={idx}>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">{item.label}</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="p-8 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{education.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{education.college}</p>
                <p className="text-gray-600 dark:text-gray-400">{education.university}</p>
                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500 dark:text-gray-500">
                  <span>{education.year}</span>
                  <span>•</span>
                  <span>{education.grade}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
