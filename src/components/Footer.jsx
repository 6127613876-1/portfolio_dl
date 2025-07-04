import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-pink-800 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold">Gokul Priyan</span>. All rights reserved.
            </p>
            <p className="text-sm text-pink-700">
              Built with React, Vite, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { icon: Github, href: "https://github.com/6127613876-1" },
              { icon: Linkedin, href: "https://linkedin.com/in/gpriyan" },
              { icon: Mail, href: "mailto:gokulpriyan781@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
