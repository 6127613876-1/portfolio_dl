import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl mt-4">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-lg rounded-full font-semibold border transition-all duration-300 cursor-pointer
                ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-red-400 text-white'
                    : 'bg-white text-pink-600 hover:bg-pink-100 border-pink-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-rose-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-pink-600 p-2 rounded-full shadow"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-pink-600 p-2 rounded-full shadow"
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-base text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-300/30 text-pink-900 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
