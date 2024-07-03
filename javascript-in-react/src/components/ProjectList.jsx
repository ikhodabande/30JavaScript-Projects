import React from 'react';

const projects = [
  { id: 1, name: 'Project 1', url: 'https://github.com/your-github-username/project1', image: '/src/assets/30Projects.png' },
  { id: 2, name: 'Project 2', url: 'https://github.com/your-github-username/project2', image: '/src/assets/a popup.jpg' },
  // Add all your project details here with corresponding images
];

const ProjectList = ({ language }) => {
  return (
    <div id="projects">
      <h1 className="text-3xl font-bold mb-4">{language === 'en' ? 'Projects' : 'پروژه‌ها'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded shadow-md" />
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
              {project.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
