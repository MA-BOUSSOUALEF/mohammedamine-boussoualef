import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Database, BookOpen, Coffee, Award, Globe, Code, Sparkles } from 'lucide-react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  // For the typing effect
  const [displayText, setDisplayText] = useState('');
  const fullText = "Passionate AI Developer & Data Engineer";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    normal: { scale: 1, rotateY: 0, transition: { duration: 0.5 } },
    hovered: { scale: 1.05, rotateY: 10, transition: { duration: 0.5 } }
  };

  const highlightVariants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.8 } }
  };

  // Tab content
  const tabContent = {
    story: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a student in <span className="font-semibold text-blue-600 dark:text-blue-400">Artificial Intelligence</span> at the University of Toulouse III, with a passion for developing intelligent applications that solve real-world problems.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey began with a curiosity about how machines could learn from data and eventually make decisions like humans. This curiosity has evolved into expertise in machine learning algorithms, deep neural networks, and data engineering pipelines.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I believe in the <span className="font-semibold text-blue-600 dark:text-blue-400">transformative power of AI</span> when combined with human creativity, and I'm committed to building solutions that are not just technically robust but also ethically sound and user-friendly.
        </p>
      </motion.div>
    ),
    education: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="relative pl-8 border-l-2 border-blue-500">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">MSc in Artificial Intelligence</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">University of Toulouse III (2024-2026)</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Specializing in machine learning, deep learning, and natural language processing</p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-blue-500">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">BSc in Computer Science</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">University of Sciences (2019-2022)</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Focus on algorithms, data structures, and software engineering principles</p>
        </div>
        
        <div className="relative pl-8">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Online Certifications</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Various Platforms (2020-Present)</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Multiple certifications in TensorFlow, PyTorch, and cloud computing technologies</p>
        </div>
      </motion.div>
    ),
    interests: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">AI Research</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring novel neural architectures</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Software Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Building robust applications</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Data Engineering</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Creating efficient data pipelines</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Reading</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Science fiction and technology books</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Traveling</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring new cultures and cities</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Coffee</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring specialty coffees</p>
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Profile Image with Animation */}
          <motion.div 
            className="lg:w-2/5 relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl opacity-70 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-2xl opacity-70 z-0"></div>
              
              <div className="relative z-10">
                {/* Main image with hover effect */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  animate={isHovered ? "hovered" : "normal"}
                  variants={imageVariants}
                >
                  <img
                    src="https://i.ibb.co/Q7ytV9JP/mohammed-amine.jpg"
                    alt="Mohammed Amine Boussoualef"
                    className="w-full rounded-2xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Profile info overlay on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-1">Mohammed Amine Boussoualef</h3>
                    <p className="text-gray-200 text-sm mb-3">Toulouse, France</p>
                    <div className="flex space-x-2">
                      <a href="https://github.com/MA-BOUSSOUALEF" target="_blank" rel="noopener noreferrer" 
                         className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                         className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="mailto:contact@example.com" 
                         className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Visual indicator elements */}
                <div className="absolute -right-4 top-8 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-20">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute -left-4 bottom-12 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 z-20">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
            
            {/* Typing effect text */}
            <motion.div 
              className="mt-8 text-center lg:text-left"
              variants={itemVariants}
            >
              <h3 className="text-gray-600 dark:text-gray-400 font-medium">{displayText}
                <span className="animate-pulse">|</span>
              </h3>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-3/5"
            variants={itemVariants}
          >
            <motion.div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <motion.div 
                  className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  variants={highlightVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              
              {/* Tabs navigation */}
              <div className="flex space-x-1 border-b border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setActiveTab('story')}
                  className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                    activeTab === 'story' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  My Story
                  {activeTab === 'story' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                    activeTab === 'education' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  Education
                  {activeTab === 'education' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('interests')}
                  className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                    activeTab === 'interests' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  Interests
                  {activeTab === 'interests' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="activeTab"
                    ></motion.div>
                  )}
                </button>
              </div>
              
              {/* Tab content */}
              <div className="py-4">
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
