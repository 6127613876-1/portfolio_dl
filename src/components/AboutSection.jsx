import { motion } from 'framer-motion';
import { User, Code, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Internships", value: "3" },
    { label: "Projects", value: "8" },
    { label: "Technologies", value: "10+" },
    { label: "Hackathons", value: "5" }
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Thiagarajar College of Engineering",
      year: "2022 - 2026"
    },
    {
      degree: "Higher Secondary Education",
      institution: "CEOA Matriculation Higher Secondary School",
      year: "2020 - 2022"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">About Me</h2>
          <h3 className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me as a developer.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-pink-500" size={28} />
              <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with over 2 years of experience. My journey began with curiosity about how websites work, leading to deep programming exploration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in modern web technologies and user experience design. I believe in clean code and keeping up with the latest tech trends.
            </p>

            {/* Education Section */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-pink-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <ul className="space-y-4 pl-2">
                {education.map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-pink-300 pl-4"
                  >
                    <p className="text-md font-semibold text-gray-800">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-5 rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-red-400 text-white"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-base font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-100 to-red-100 p-8 flex items-center justify-center shadow-lg">
              <div className="w-full h-full rounded-xl bg-white/50 backdrop-blur-md flex items-center justify-center">
                <Code size={120} className="text-pink-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
