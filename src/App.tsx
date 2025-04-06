import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;