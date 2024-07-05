import popUp from '../assets/a popup.jpg';
import agecaculator from '../assets/age caculater.jpg';
import beforAfter from '../assets/beforeafter.jpg';
import calculator from '../assets/calculator.jpg';
import circleprogress from '../assets/circleprogress.jpg';
import cryptocurrency from '../assets/cryptocurrency.jpg';
import darknighttoggle from '../assets/darknighttoggle.jpg';
import formvalidation from '../assets/formvalidation.jpg';
import dragdrop from '../assets/drag and drop.jpg';
import imagegallery from '../assets/image gallery.jpg';
import lounchingwebsite from '../assets/lounching website.jpg';
import minicalendare from '../assets/mini calendare.jpg';
import musicplayer from '../assets/music player.jpg';
import noteapp from '../assets/note app.jpg';
import notification from '../assets/notification.jpg';
import passwordtoggle from '../assets/password toggle.jpg';
import productpage from '../assets/product pagr.jpg';
import qrcode from '../assets/qrcode.jpg';
import Quizapp from '../assets/Quiz app.jpg';
import quoteofday from '../assets/quoteofday.jpg';
import randompass from '../assets/random pass.jpg';
import searchimagez from '../assets/search image.jpg';
import selectmenu from '../assets/select menu.jpg';
import stopwatch from '../assets/stopwatch.jpg';
import texttype from '../assets/text type.jpg';
import texttovoice from '../assets/texttovoice.jpg';
import todolist from '../assets/to do list.jpg';
import weatherapp from '../assets/weather app.jpg';
import time from '../assets/time.jpg';

const projects = [
  { id: 1, name: '30 Projects', url: 'https://github.com/your-github-username/project1', image: popUp },
  { id: 2, name: 'A Popup', url: 'https://github.com/your-github-username/project2', image: popUp },
  { id: 3, name: 'Age Calculator', url: 'https://github.com/your-github-username/project3', image: agecaculator },
  { id: 4, name: 'Before After', url: 'https://github.com/your-github-username/project4', image: beforAfter },
  { id: 5, name: 'Calculator', url: 'https://github.com/your-github-username/project5', image: calculator },
  { id: 6, name: 'Circle Progress', url: 'https://github.com/your-github-username/project6', image: circleprogress},
  { id: 7, name: 'Cryptocurrency', url: 'https://github.com/your-github-username/project7', image:cryptocurrency },
  { id: 8, name: 'Dark Night Toggle', url: 'https://github.com/your-github-username/project8', image:darknighttoggle },
  { id: 9, name: 'Drag and Drop', url: 'https://github.com/your-github-username/project9', image: dragdrop },
  { id: 10, name: 'Form Validation', url: 'https://github.com/your-github-username/project10', image: formvalidation },
  { id: 11, name: 'Image Gallery', url: 'https://github.com/your-github-username/project11', image: imagegallery },
  { id: 12, name: 'Launching Website', url: 'https://github.com/your-github-username/project12', image: lounchingwebsite },
  { id: 13, name: 'Mini Calendar', url: 'https://github.com/your-github-username/project13', image: minicalendare },
  { id: 14, name: 'Music Player', url: 'https://github.com/your-github-username/project14', image: musicplayer },
  { id: 15, name: 'Note App', url: 'https://github.com/your-github-username/project15', image: noteapp },
  { id: 16, name: 'Notification', url: 'https://github.com/your-github-username/project16', image: notification },
  { id: 17, name: 'Password Toggle', url: 'https://github.com/your-github-username/project17', image: passwordtoggle },
  { id: 18, name: 'Product Page', url: 'https://github.com/your-github-username/project18', image: productpage },
  { id: 19, name: 'QRCode', url: 'https://github.com/your-github-username/project19', image: qrcode },
  { id: 20, name: 'Quiz App', url: 'https://github.com/your-github-username/project20', image: Quizapp },
  { id: 21, name: 'Quote of the Day', url: 'https://github.com/your-github-username/project21', image: quoteofday },
  { id: 22, name: 'Random Password', url: 'https://github.com/your-github-username/project22', image: randompass },
  { id: 23, name: 'Search Image', url: 'https://github.com/your-github-username/project23', image: searchimagez },
  { id: 24, name: 'Select Menu', url: 'https://github.com/your-github-username/project24', image: selectmenu},
  { id: 25, name: 'Stopwatch', url: 'https://github.com/your-github-username/project25', image: stopwatch },
  { id: 26, name: 'Text Type', url: 'https://github.com/your-github-username/project26', image: texttype },
  { id: 27, name: 'Text to Voice', url: 'https://github.com/your-github-username/project27', image: texttovoice },
  { id: 28, name: 'Time', url: 'https://github.com/your-github-username/project28', image: time },
  { id: 29, name: 'To Do List', url: 'https://github.com/your-github-username/project29', image: todolist },
  { id: 30, name: 'Weather App', url: 'https://github.com/your-github-username/project30', image: weatherapp },
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
