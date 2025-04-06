import React from 'react';
import { motion } from 'framer-motion';

const Accomplishments = () => {
  const accomplishments = [
    {
      title: "Research Collaborator – IRIT",
      subtitle: "Data Pipeline & AI Research",
      description: "Collaborated with IRIT on designing a data pipeline integrating web scraping and AI to analyze research trends and predict outcomes.",
      icon: "🔬",
      date: "January - March 2025"
    },
    {
      title: "AI Development Internship",
      subtitle: "Regional Observatory Corsica",
      description: "Developed an artificial intelligence program for the Regional Observatory in Corsica to efficiently summarize extensive volumes of medical commentary.",
      icon: "🧠",
      date: "April - May 2024"
    },
    {
      title: "Hackathon Winner",
      subtitle: "SITEC Challenge",
      description: "Led a team of 4 to victory with 'Smart Waste Manager', an AI solution revolutionizing waste collection in urban and rural areas. Completed in just 3 days at the University of Corsica.",
      icon: "🏆",
      date: "December 21-23, 2023"
    },
    {
      title: "Web Development Internship",
      subtitle: "Polytechnic Engineering School",
      description: "Developed a comprehensive website for a polytechnic engineering school to manage female students during two-month internships, working in collaboration with a partner.",
      icon: "💻",
      date: "April - June 2023"
    }
  ];

  return (
    <section id="accomplishments" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Professional Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accomplishments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Card Header with Icon */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full">
                    {item.date}
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-sm text-indigo-500 dark:text-indigo-300 mb-3 font-medium">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Card Footer with Animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;