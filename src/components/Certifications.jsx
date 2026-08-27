import React from 'react';
import { portfolioData } from '../mock';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                <Award size={24} />
              </div>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {cert}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;