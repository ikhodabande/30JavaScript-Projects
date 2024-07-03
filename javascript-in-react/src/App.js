import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-jsGray dark:bg-jsBlack text-jsGray dark:text-white min-h-screen">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <div className="container mx-auto p-4">
          <ProjectList language={language} />
        </div>
      </div>
    </div>
  );
};

export default App;
