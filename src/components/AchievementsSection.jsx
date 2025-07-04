import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Winner - HackFest INFINIX’25",
    subtitle: "Thiagarajar College of Engineering",
    description: "Developed an innovative web solution.",
  },
  {
    title: "Runner (2nd Prize) - NeonHacks’25",
    subtitle: "Velammal College of Engineering and Technology",
    description: "Built an AI-integrated personalized learning system.",
  },
  {
    title: "Winner - Festember’25",
    subtitle: "National Institute of Technology, Tiruchirappalli",
    description: "Gaming competition winner.",
  },
  {
    title: "Winner - Yugam’25",
    subtitle: "Kumaraguru College of Technology",
    description: "Food Photography winner.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognitions and awards from national-level tech and creative competitions.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-pink-400 pl-6 space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative cursor-pointer bg-white"
            >
              <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md">
                <Trophy size={18} />
              </div>
              <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-pink-700">
                  {item.title}
                </h3>
                <p className="text-md text-gray-800">{item.subtitle}</p>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
