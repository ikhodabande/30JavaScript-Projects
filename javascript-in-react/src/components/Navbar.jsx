import React from 'react';

const Navbar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  return (
    <nav className="bg-jsYellow text-jsBlack p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#home" className="hover:underline">{language === 'en' ? 'Home' : 'خانه'}</a>
          <a href="#projects" className="hover:underline">{language === 'en' ? 'Projects' : 'پروژه‌ها'}</a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-jsGray text-white py-2 px-4 rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            className="bg-jsGray text-white py-2 px-4 rounded"
            onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
          >
            <i className="fas fa-language"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
