import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info } from 'lucide-react';

interface Project {
  title: string;
  technologies: string;
  description: string;
  image: string;
  github: string;
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "Chatbot Conversational with Multiple PDFs",
      technologies: "Python, Hugging Face Transformers, FAISS, PyPDF2, LangChain, Flask, Streamlit",
      description: "Interactive RAG Chatbot Providing Accurate Answers from PDFs Users ask questions and receive answers based on the content of the embedded files.",
      image: "https://i.ibb.co/yFWLvspS/RAG.png",
      github: "https://github.com/MA-BOUSSOUALEF/RAG-Chat-with-Multiple-PDFs-LangChain"
    },
    {
      title: "Automated CV Quality Assessment",
      technologies: "spaCy, Hugging Face, Deep Learning, Flask, Fine-Tuning LLMs",
      description: "Leveraging ETL and AI for Error Detection and Career Advice",
      image: "https://i.ibb.co/VWGGnPpR/IACV.png",
      github: "https://github.com/MA-BOUSSOUALEF/ETL-Powered-AI-CV-Analyzer-Error-Detection-Optimization-and-AI-Driven-Advice"
    },
    {
      title: "AI-Powered Medical Summarizer",
      technologies: "Python, Jupyter, NLP, Fine-Tuning LLMs",
      description: "Artificial intelligence program designed to efficiently summarize extensive volumes of medical commentary",
      image: "https://i.ibb.co/S44dx3nK/iaDoctor.png",
      github: "https://github.com/MA-BOUSSOUALEF/NLP-for-Summarizing-Medical-Texts-and-Others"
    },
    {
      title: "AI Voice Assistant",
      technologies: "Python 3, Machine Learning, Signal Processing",
      description: "AI voice assistant that understands and responds to user commands using speech recognition and natural language processing.",
      image: "https://i.ibb.co/ZRhhMV5X/IAVOICE.png",
      github: "https://github.com/MA-BOUSSOUALEF/IA-VOICE-ASSICTANCE"
    },
    {
      title: "Face Mask Detection Using AI",
      technologies: "Jupyter, Python, API, Machine Learning",
      description: "Intelligent Detection of Masked and Unmasked Faces",
      image: "https://i.ibb.co/r2xzWNnZ/IAPicture.png",
      github: "https://github.com/MA-BOUSSOUALEF/Traitement-d-image"
    },
    {
      title: "Twitter Data Pipeline",
      technologies: "Python3, Airflow, AWS, Docker, Pandas, EC2",
      description: "A data pipeline that extracts, transforms, and loads Twitter data using Python, Airflow, and AWS, then serves it via a local API.",
      image: "https://i.ibb.co/n8Qyc1Dw/ETLTwitter.png",
      github: "https://github.com/MA-BOUSSOUALEF/ELT_TWITTER"
    },
    {
      title: "ETL Pipeline for Business Data Analysis",
      technologies: "Python3, NLP, Kaggle, Airflow, Spark, Matplotlib, Seaborn, Pandas",
      description: "A data pipeline built with Python, Airflow, and AWS to process data from multiple companies, analyze sales trends, product performance, and customer behavior.",
      image: "https://i.ibb.co/tMZtNcHx/Trend-Product.png",
      github: "https://github.com/MA-BOUSSOUALEF/Project-E-Commerce-Sales-Analytics-Pipeline"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Technology pill animation
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Split technologies into array
  const splitTechnologies = (techs: string) => {
    return techs.split(',').map(tech => tech.trim());
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Explore my portfolio of AI, data science, and machine learning projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: activeIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0, 
                      y: activeIndex === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex gap-3"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <button
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-colors duration-300"
                      aria-label="More information"
                    >
                      <Info className="w-5 h-5 text-white" />
                    </button>
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {splitTechnologies(project.technologies).slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: techIndex * 0.1 }}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {splitTechnologies(project.technologies).length > 3 && (
                    <motion.span
                      variants={tagVariants}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      +{splitTechnologies(project.technologies).length - 3} more
                    </motion.span>
                  )}
                </div>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 line-clamp-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/MA-BOUSSOUALEF" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;