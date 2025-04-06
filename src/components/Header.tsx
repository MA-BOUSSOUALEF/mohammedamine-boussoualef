import React from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const navItems = [
    'Home',
    'About',
    'Resume',
    'Services',
    'Skills',
    'Projects',
    'Accomplishments',
    'Contact',
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
          MA-B
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light cursor-pointer transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;