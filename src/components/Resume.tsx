import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Master Degree in Artificial Intelligence Application And Fundamentals",
      organization: "Université de Toulouse",
      period: "2024-2025",
      icon: "🎓",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Bachelor's Degree in Computer Science Engineering",
      organization: "University of Corsica",
      period: "2023-2024",
      icon: "💻",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Bachelor's Degree in Computer Science",
      organization: "Faculty of Sciences and Techniques of Fes",
      period: "2022-2023",
      icon: "🔬",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "University Diploma in Scientific and Technical Studies in Mathematics, Computer Science, and Physics",
      organization: "Faculty of Sciences and Techniques of Fes",
      period: "2020-2022",
      icon: "🧮",
      color: "from-purple-500 to-pink-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900 opacity-30 blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1, x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-purple-100 dark:bg-purple-900 opacity-20 blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1, x: [0, -10, 10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🌟
          </motion.span>{" "}
          My Academic Background
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring", 
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="flex gap-6 mb-8 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient that appears on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0`}
                animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-3xl`}
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {exp.icon}
              </motion.div>
              
              <div className="flex-grow">
                <motion.h3 
                  className="text-xl font-semibold text-gray-800 dark:text-white mb-2"
                  animate={{ 
                    color: hoveredIndex === index ? "#6366f1" : "", 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{exp.organization}</p>
                <motion.div 
                  className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  initial={{ width: "30%" }}
                  animate={{ width: hoveredIndex === index ? "100%" : "30%" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className={`h-0.5 bg-gradient-to-r ${exp.color} mr-2 rounded-full`}
                    style={{ width: hoveredIndex === index ? "2rem" : "1rem" }}
                    transition={{ duration: 0.3 }}
                  />
                  {exp.period}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://drive.google.com/file/d/1YVTsRBzfQrbMUrk-76ngkTQUIEim0ody/view" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.4 }}
            />
            <motion.span className="relative flex items-center">
              Download CV 
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ y: 0 }}
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
