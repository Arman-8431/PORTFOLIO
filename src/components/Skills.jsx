import React from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../mock';
import * as LucideIcons from 'lucide-react';

const Skills = () => {
  const { skills, personal } = portfolioData;

  const getIcon = (iconName) => {
    const icons = {
      'coffee': LucideIcons.Coffee,
      'leaf': LucideIcons.Leaf,
      'zap': LucideIcons.Zap,
      'database': LucideIcons.Database,
      'react': LucideIcons.Component,
      'code': LucideIcons.Code,
      'file-code': LucideIcons.FileCode,
      'monitor': LucideIcons.Monitor,
      'flame': LucideIcons.Flame,
      'github': LucideIcons.Github,
      'package': LucideIcons.Package,
      'send': LucideIcons.Send,
      'code-2': LucideIcons.Code2
    };
    const Icon = icons[iconName] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  const stats = [
    { label: 'Technologies', value: personal.technologiesCount, icon: Code },
    { label: 'Experience', value: personal.yearsExperience, icon: Server },
    { label: 'Projects', value: personal.projectsCount, icon: Database },
    { label: 'Certifications', value: personal.certificationsCount, icon: Wrench }
  ];

  const skillCategories = [
    { title: 'Backend Development', description: 'Building secure, scalable backend systems', skills: skills.backend, icon: Server },
    { title: 'Frontend Development', description: 'Creating modern, responsive user interfaces', skills: skills.frontend, icon: Code },
    { title: 'Database & Caching', description: 'Designing efficient data storage and caching', skills: skills.database, icon: Database },
    { title: 'DevOps & Tools', description: 'Streamlining deployment and cloud infrastructure', skills: skills.tools, icon: Wrench }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Code size={24} className="text-gray-900 dark:text-white" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Technical Expertise</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                  <Icon size={24} className="text-gray-900 dark:text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2">
              <Code size={20} className="text-gray-900 dark:text-white" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="p-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Icon size={24} className="text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{category.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-gray-600 dark:text-gray-400">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;