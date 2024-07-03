import React from 'react';

const projects = [
  { id: 1, name: '30 Projects', url: 'https://github.com/your-github-username/project1', image: '/src/assets/30Projects.png' },
  { id: 2, name: 'A Popup', url: 'https://github.com/your-github-username/project2', image: '/src/assets/a popup.jpg' },
  { id: 3, name: 'Age Calculator', url: 'https://github.com/your-github-username/project3', image: '/src/assets/age caculater.jpg' },
  { id: 4, name: 'Before After', url: 'https://github.com/your-github-username/project4', image: '/src/assets/beforeafter.jpg' },
  { id: 5, name: 'Calculator', url: 'https://github.com/your-github-username/project5', image: '/src/assets/calculator.jpg' },
  { id: 6, name: 'Circle Progress', url: 'https://github.com/your-github-username/project6', image: '/src/assets/circleprogress.jpg' },
  { id: 7, name: 'Cryptocurrency', url: 'https://github.com/your-github-username/project7', image: '/src/assets/cryptocurrency.jpg' },
  { id: 8, name: 'Dark Night Toggle', url: 'https://github.com/your-github-username/project8', image: '/src/assets/darknighttoggle.jpg' },
  { id: 9, name: 'Drag and Drop', url: 'https://github.com/your-github-username/project9', image: '/src/assets/drag and drop.jpg' },
  { id: 10, name: 'Form Validation', url: 'https://github.com/your-github-username/project10', image: '/src/assets/formvalidation.jpg' },
  { id: 11, name: 'Image Gallery', url: 'https://github.com/your-github-username/project11', image: '/src/assets/image gallery.jpg' },
  { id: 12, name: 'Launching Website', url: 'https://github.com/your-github-username/project12', image: '/src/assets/lounching website.jpg' },
  { id: 13, name: 'Mini Calendar', url: 'https://github.com/your-github-username/project13', image: '/src/assets/mini calendare.jpg' },
  { id: 14, name: 'Music Player', url: 'https://github.com/your-github-username/project14', image: '/src/assets/music player.jpg' },
  { id: 15, name: 'Note App', url: 'https://github.com/your-github-username/project15', image: '/src/assets/note app.jpg' },
  { id: 16, name: 'Notification', url: 'https://github.com/your-github-username/project16', image: '/src/assets/notification.jpg' },
  { id: 17, name: 'Password Toggle', url: 'https://github.com/your-github-username/project17', image: '/src/assets/password toggle.jpg' },
  { id: 18, name: 'Product Page', url: 'https://github.com/your-github-username/project18', image: '/src/assets/product pagr.jpg' },
  { id: 19, name: 'QRCode', url: 'https://github.com/your-github-username/project19', image: '/src/assets/qrcode.jpg' },
  { id: 20, name: 'Quiz App', url: 'https://github.com/your-github-username/project20', image: '/src/assets/Quiz app.jpg' },
  { id: 21, name: 'Quote of the Day', url: 'https://github.com/your-github-username/project21', image: '/src/assets/quoteofday.jpg' },
  { id: 22, name: 'Random Password', url: 'https://github.com/your-github-username/project22', image: '/src/assets/random pass.jpg' },
  { id: 23, name: 'Search Image', url: 'https://github.com/your-github-username/project23', image: '/src/assets/search image.jpg' },
  { id: 24, name: 'Select Menu', url: 'https://github.com/your-github-username/project24', image: '/src/assets/select menu.jpg' },
  { id: 25, name: 'Stopwatch', url: 'https://github.com/your-github-username/project25', image: '/src/assets/stopwatch.jpg' },
  { id: 26, name: 'Text Type', url: 'https://github.com/your-github-username/project26', image: '/src/assets/text type.jpg' },
  { id: 27, name: 'Text to Voice', url: 'https://github.com/your-github-username/project27', image: '/src/assets/texttovoice.jpg' },
  { id: 28, name: 'Time', url: 'https://github.com/your-github-username/project28', image: '/src/assets/time.jpg' },
  { id: 29, name: 'To Do List', url: 'https://github.com/your-github-username/project29', image: '/src/assets/to do list.jpg' },
  { id: 30, name: 'Weather App', url: 'https://github.com/your-github-username/project30', image: '/src/assets/weather app.jpg' },
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
