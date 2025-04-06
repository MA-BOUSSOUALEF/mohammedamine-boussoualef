import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Home = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } }, // Increased number of particles for more effect
            color: { value: '#60A5FA' },
            links: {
              enable: true,
              color: '#60A5FA',
              opacity: 0.5
            },
            move: {
              enable: true,
              speed: 1
            },
            shape: {
              type: "circle", // You can change the shape to 'circle' or 'triangle'
            },
            size: {
              value: 3, // Smaller particles for a more elegant look
              random: true,
            },
          }
        }}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent animate-glitch"
        >
          Welcome to my world of AI and creativity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          I am a developer specializing in artificial intelligence, with a passion for creating innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
