  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { ChevronDown, Github, Linkedin, Instagram, Download } from 'lucide-react';

  const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Freelancer"];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-2">Gokul Priyan S</h1>
              <div className="h-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold text-pink-700"
                  >
                    {roles[currentRole]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate developer with 2 years of experience creating beautiful, functional, and user-centered digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 to-red-400 cursor-pointer text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition"
              >
                View My Work
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Gokul_Priyan_CV.pdf"
                download
                className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-8 py-3 rounded-full font-medium shadow-md flex items-center gap-2 transition"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Github, href: "https://github.com/6127613876-1" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gpriyan/" },
                { icon: Instagram, href: "https://www.instagram.com/itz_gokul_cbg/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-pink-500 hover:text-red-400 transition"
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-pink-400"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HeroSection;
