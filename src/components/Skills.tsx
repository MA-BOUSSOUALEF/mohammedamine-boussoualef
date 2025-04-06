import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  FlaskRound as Flask, 
  LineChart, 
  Network, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Star
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
  color: string;
  category: string;
}

interface CategoryFilter {
  name: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [hoverSkill, setHoverSkill] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories: CategoryFilter[] = [
    { name: "All", icon: <Star className="w-4 h-4" /> },
    { name: "Programming", icon: <Code className="w-4 h-4" /> },
    { name: "AI", icon: <Brain className="w-4 h-4" /> },
    { name: "Data", icon: <Database className="w-4 h-4" /> }
  ];

  const skills: Skill[] = [
    {
      name: "Python",
      level: 90,
      icon: <Code className="w-8 h-8" />,
      description: "Expertise in Python development with focus on AI applications, data processing pipelines, and automation scripts. Proficient with Python frameworks and libraries.",
      color: "from-blue-500 to-blue-700",
      category: "Programming"
    },
    {
      name: "TensorFlow",
      level: 85,
      icon: <Brain className="w-8 h-8" />,
      description: "Building complex deep learning models, neural networks, and optimizing performance for production environments. Experience with TF Serving and TFX.",
      color: "from-orange-500 to-orange-700",
      category: "AI"
    },
    {
      name: "PyTorch",
      level: 80,
      icon: <Zap className="w-8 h-8" />,
      description: "Development of cutting-edge neural networks for computer vision and NLP tasks. Experience with research applications and CUDA acceleration.",
      color: "from-red-500 to-red-700",
      category: "AI"
    },
    {
      name: "Scikit-learn",
      level: 75,
      icon: <Flask className="w-8 h-8" />,
      description: "Mastery of classical ML algorithms, feature engineering, and data preprocessing. Building robust pipelines for production machine learning systems.",
      color: "from-blue-400 to-indigo-600",
      category: "AI"
    },
    {
      name: "React JS",
      level: 85,
      icon: <Code className="w-8 h-8" />,
      description: "Building modern, reactive user interfaces with component-based architecture. Experience with React ecosystem including hooks, context API, and state management.",
      color: "from-cyan-500 to-blue-500",
      category: "Programming"
    },
    {
      name: "Machine Learning",
      level: 95,
      icon: <LineChart className="w-8 h-8" />,
      description: "Expertise in designing and implementing machine learning algorithms for classification, regression, and clustering tasks. Experience with model deployment and monitoring.",
      color: "from-green-500 to-emerald-700",
      category: "AI"
    },
    {
      name: "Deep Learning",
      level: 90,
      icon: <Network className="w-8 h-8" />,
      description: "Design and optimization of deep neural networks including CNNs, RNNs, and transformer architectures. Implementation of state-of-the-art research papers.",
      color: "from-violet-500 to-purple-700",
      category: "AI"
    },
    {
      name: "SQL & NoSQL",
      level: 82,
      icon: <Database className="w-8 h-8" />,
      description: "Proficient in database design, optimization, and querying. Experience with PostgreSQL, MongoDB, and Redis for different data storage needs.",
      color: "from-blue-600 to-indigo-800",
      category: "Data"
    },
    {
      name: "Data Engineering",
      level: 88,
      icon: <Database className="w-8 h-8" />,
      description: "Building scalable ETL pipelines, data lakes, and warehousing solutions. Experience with Airflow, Apache Spark, and cloud data services.",
      color: "from-indigo-500 to-indigo-800",
      category: "Data"
    }
  ];

  const filteredSkills = activeCategory && activeCategory !== "All" 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut" }
    })
  };

  // Pulse animation for the active skill
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { repeat: Infinity, duration: 2 }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency levels across various programming languages,
            frameworks, and technologies in AI, machine learning, and software development.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name === activeCategory ? null : category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.name === activeCategory || (category.name === "All" && !activeCategory)
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || "all"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                layout
                className="relative z-10"
                onMouseEnter={() => setHoverSkill(index)}
                onMouseLeave={() => setHoverSkill(null)}
              >
                <motion.div
                  animate={activeSkill === index ? pulseAnimation : {}}
                  className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                    activeSkill === index ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                  }`}
                >
                  {/* Card Header with Icon and Name */}
                  <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">
                          {skill.name}
                        </h3>
                      </div>
                      <motion.div
                        animate={hoverSkill === index ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight 
                          className="text-gray-400 dark:text-gray-500 w-5 h-5" 
                          onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">Proficiency</span>
                        <span className="text-gray-800 dark:text-gray-200 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={progressVariants}
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                    
                    {/* Expandable Description */}
                    <AnimatePresence>
                      {activeSkill === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                            {skill.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Learn More Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                      className={`mt-4 flex items-center text-sm font-medium ${
                        activeSkill === index 
                          ? "text-gray-500 dark:text-gray-400" 
                          : `text-gradient bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`
                      }`}
                    >
                      {activeSkill === index ? "Show less" : "Learn more"}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Decorative Background Elements */}
                <div className="absolute -z-10 top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -z-10 bottom-0 left-0 -ml-6 -mb-6 w-32 h-32 bg-gradient-to-r from-pink-200 to-cyan-200 dark:from-pink-900/20 dark:to-cyan-900/20 rounded-full blur-xl opacity-70"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills Summary</h3>
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-blue-600 text-white rounded-full">
                <Brain className="w-5 h-5" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">AI & ML Specialist</span> with expertise in deep learning architectures and production ML systems.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-purple-600 text-white rounded-full">
                <Code className="w-5 h-5" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Full Stack Developer</span> proficient in Python, JavaScript ecosystems and modern frameworks.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-green-600 text-white rounded-full">
                <Database className="w-5 h-5" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Data Engineer</span> experienced with ETL pipelines, data warehousing, and database optimization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;