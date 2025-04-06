import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          {/* Section Title */}
          <motion.h3
            className="text-white text-2xl font-semibold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Connect with Me!
          </motion.h3>

          {/* Animated Text for Copyright */}
          <motion.p
            className="text-gray-200 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Mohamed Amine Boussoualef. All rights reserved
          </motion.p>

          {/* Animated Email and Phone */}
          <motion.p
            className="text-gray-200 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="font-bold">Email:</span> <a href="mailto:amine@example.com" className="hover:text-white">mohammedamineboussoialef@gmail.com</a>
          </motion.p>
          <motion.p
            className="text-gray-200 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="font-bold">Phone:</span> <a href="tel:+1234567890" className="hover:text-white">+33 6-13-99-07-28</a>
          </motion.p>

          {/* Animated Icons with Bounce Effects */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/MA-BOUSSOUALEF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }} // Bounce effect on hover
              transition={{ duration: 0.3 }}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohamed-amine-boussoualef-b78020262/?profileId=ACoAAEBuSIwBwQ75NdcOtzpld3g-SiWXkgZTaWM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }} // Bounce effect on hover
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>

          {/* Animated Quote Text */}
          <motion.p
            className="text-gray-200 italic"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            "The future belongs to those who master the algorithm."
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
