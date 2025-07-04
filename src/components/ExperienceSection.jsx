import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import experiences from '../data/experiences';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50"
    >
      <br/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My professional journey and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm ring-1 cursor-pointer ring-gray-200 shadow-xl rounded-2xl p-8 transition hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {experience.position}
                  </h3>
                  <p className="text-rose-600 font-medium">
                    {experience.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Briefcase className="w-5 h-5" />
                  {experience.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{experience.description}</p>

              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center rounded-full bg-rose-600 text-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-rose-700 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
