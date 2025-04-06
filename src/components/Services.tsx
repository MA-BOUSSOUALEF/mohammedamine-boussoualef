import React, { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "AI Model Development",
      description: "Design and deployment of custom machine learning models tailored to your specific business needs and challenges.",
      icon: "🤖",
      color: "from-blue-500 to-indigo-600",
      hoverColor: "from-blue-600 to-indigo-700"
    },
    {
      title: "Data Analysis",
      description: "Processing and analysis of large data sets to extract meaningful insights and drive decision-making.",
      icon: "📊",
      color: "from-green-500 to-teal-600",
      hoverColor: "from-green-600 to-teal-700"
    },
    {
      title: "Algorithm Optimization",
      description: "Improving the performance, efficiency and accuracy of existing AI models and algorithms.",
      icon: "⚡",
      color: "from-yellow-500 to-amber-600",
      hoverColor: "from-yellow-600 to-amber-700"
    },
    {
      title: "Web Development",
      description: "Creating modern, responsive and interactive web applications using React JS and cutting-edge technologies.",
      icon: "💻",
      color: "from-purple-500 to-fuchsia-600",
      hoverColor: "from-purple-600 to-fuchsia-700"
    },
    {
      title: "AI Training",
      description: "Custom training sessions and tutorials to help your team leverage the power of artificial intelligence.",
      icon: "📚",
      color: "from-pink-500 to-rose-600",
      hoverColor: "from-pink-600 to-rose-700"
    },
    {
      title: "AI Consulting",
      description: "Strategic consulting to help your business integrate AI solutions for maximum efficiency and growth.",
      icon: "💡",
      color: "from-orange-500 to-red-600",
      hoverColor: "from-orange-600 to-red-700"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full transform rotate-12 dark:from-blue-600/5 dark:to-purple-600/5"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 15 + 15 + 's',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16 relative">
          <span className="inline-block text-sm font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-2">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
            Specialized AI and development solutions to power your business with cutting-edge technology
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Services grid with advanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative rounded-xl overflow-hidden transition-all duration-500 transform
                  ${hoveredIndex === index ? 'scale-105 shadow-2xl z-20' : 'shadow-lg'}
                  bg-white dark:bg-gray-800 h-full
                `}
              >
                {/* Background gradient that animates on hover */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${service.color} dark:opacity-80
                    transition-opacity duration-500 opacity-0 group-hover:opacity-10
                  `}
                ></div>

                {/* Card content with hover animations */}
                <div className="p-8 h-full flex flex-col">
                  {/* Icon with floating animation */}
                  <div 
                    className={`
                      flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br 
                      ${service.color} text-white text-3xl
                      transition-all duration-500 transform group-hover:scale-110
                      ${hoveredIndex === index ? 'shadow-lg' : ''}
                    `}
                    style={{
                      animation: hoveredIndex === index ? 'floating 3s ease-in-out infinite' : 'none'
                    }}
                  >
                    <span>{service.icon}</span>
                  </div>

                  {/* Service title with animation */}
                  <h3 
                    className={`
                      text-2xl font-bold mb-4 transition-colors duration-300
                      text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Description with subtle animation */}
                  <p 
                    className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 flex-grow"
                  >
                    {service.description}
                  </p>

                  {/* Learn more link that appears on hover */}
                  <div 
                    className={`
                      mt-6 transition-all duration-500 transform 
                      ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                  >
                    <a 
                      href="#" 
                      className={`
                        inline-flex items-center text-sm font-medium
                        bg-gradient-to-r ${service.color} bg-clip-text text-transparent
                        hover:underline
                      `}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements that appear on hover */}
              <div 
                className={`
                  absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-blue-500 rounded-tr-xl
                  transition-all duration-500 opacity-0 transform translate-x-4 -translate-y-4
                  ${hoveredIndex === index ? 'opacity-100 translate-x-2 -translate-y-2' : ''}
                `}
              ></div>
              <div 
                className={`
                  absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-xl
                  transition-all duration-500 opacity-0 transform -translate-x-4 translate-y-4
                  ${hoveredIndex === index ? 'opacity-100 -translate-x-2 translate-y-2' : ''}
                `}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Added CSS animations */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .absolute {
          animation: fadeInOut ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;