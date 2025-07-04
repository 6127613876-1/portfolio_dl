import { motion } from 'framer-motion';
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiAdobephotoshop,
  SiMongodb,
} from 'react-icons/si';

const SkillsSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const skills = {
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
    ],
    DBMS: [
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    'Other Skills': [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
    ],
  };

  return (
    <section id="skills" className="py-24 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Box with rose background */}
        <div className="rounded-2xl shadow-xl bg-gradient-to-r bg-white/50 p-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2 text-white px-5 py-2 bg-red-400 rounded-full text-sm bg-gradient-to-r  hover:scale-105 transition-transform shadow-sm"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
