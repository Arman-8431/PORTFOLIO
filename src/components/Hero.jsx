import React from "react";
import { MapPin, Mail, Download, Github, Linkedin, Send } from "lucide-react";
import { portfolioData } from "../mock";

const Hero = () => {
  const { personal, social } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {personal.availability}
              </span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-gray-400 dark:text-gray-500">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-400 mb-6">
                {personal.title}
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personal.description}
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{personal.availability}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="/Arman_Ali_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-md"> View CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Send size={18} className="mr-2" />
                Get In Touch
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={social.email}
                className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-gray-900 dark:border-white flex items-center justify-center bg-white dark:bg-black overflow-hidden">
                <img
                  src="/profile-pic.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium">
                {personal.projectsCount} Projects
              </div>
              <div className="absolute bottom-4 left-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium">
                {personal.yearsExperience} Experience
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
