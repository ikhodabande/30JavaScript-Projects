import React, { useState } from 'react'
import weatherapp from '../assets/weather app.jpg'
import todo from '../assets/to do list.jpg'
import time from '../assets/time.jpg'
import texttovoice from '../assets/texttovoice.jpg'
import texttype from '../assets/text type.jpg'
import stopwatch from '../assets/stopwatch.jpg'
import selectmenu from '../assets/select menu.jpg'
import searchimg from '../assets/search image.jpg'
import randompass from '../assets/random pass.jpg'
import quoteofday from '../assets/quoteofday.jpg'
import Quizapp from '../assets/Quiz app.jpg'
import qrcode from '../assets/qrcode.jpg'
import productpage from '../assets/product pagr.jpg'
import passwordtoggle from '../assets/password toggle.jpg'
import notification from '../assets/notification.jpg'
import noteapp from '../assets/note app.jpg'
import musicplayer from '../assets/music player.jpg'
import minicalendare from '../assets/mini calendare.jpg'
import lounchingwebsite from '../assets/lounching website.jpg'
import imagegallery from '../assets/image gallery.jpg'
import formvalidation from '../assets/formvalidation.jpg'
import dragdrop from '../assets/drag and drop.jpg'
import darktoggle from '../assets/darknighttoggle.jpg'
import cryptocurrency from '../assets/cryptocurrency.jpg'
import circleprogress from '../assets/circleprogress.jpg'
import calculator from '../assets/calculator.jpg'
import beforeafter from '../assets/beforeafter.jpg'
import agecalculator from '../assets/age caculater.jpg'
import popup from '../assets/a popup.jpg'
import Task from './Task'

const Projects = () => {
  const tasks =[
{name:weatherapp,id:1},
todo,
time,
texttovoice,
texttype,
stopwatch,
selectmenu,
searchimg,
randompass,
quoteofday,
Quizapp,
qrcode,
productpage,
passwordtoggle,
notification,
noteapp,
musicplayer,
minicalendare,
lounchingwebsite,
imagegallery,
formvalidation,
dragdrop,
darktoggle,
cryptocurrency,
circleprogress,
calculator,
beforeafter,
agecalculator,
popup,
  ]

  const [showMore, setShowMore] = useState(false);

  const toggleProjects = () => {
    setShowMore(!showMore);
  };

  return (
    
    <div name="Projects" className='container'>
       <div className='Projects'>
       {
      tasks.map((name=>
        <Task TaskName={name}/>
      ))
    }

    </div>
    {showMore && (
    <div id='more' className='Projects '>
      <div className='cards' >
        <img className='img' src={quoteofday} alt="" />
        <span>Quote Of Day</span>
      </div>
      <div className='cards'>
        <img className='img' src={Quizapp} />
        <span>Quiz app</span>
      </div>
      <div className='cards'>
        <img className='img' src={qrcode} />
        <span>QrCode</span>
      </div>
      <div className='cards'>
        <img className='img' src={productpage}/>
        <span>Product Page</span>
      </div>
      <div className='cards'>
        <img className='img' src={passwordtoggle} />
        <span>Password Toggle</span>
      </div>
      <div className='cards'>
        <img className='img' src={notification} />
        <span>Notification</span>
      </div>
      <div className='cards'>
        <img className='img' src={noteapp} />
        <span>Note App</span>
      </div>
      <div className='cards'>
        <img className='img' src={musicplayer}/>
        <span>MusicPlayer</span>
      </div>
      <div className='cards'>
        <img className='img' src={randompass} />
        <span>Pass Generator</span>
      </div>
      <div className='cards' >
        <img className='img' src={weatherapp} alt="" />
        <span>Weather App</span>
      </div>
      <div className='cards'>
        <img className='img' src={todo} />
        <span>ToDo List</span>
      </div>
      <div className='cards'>
        <img className='img' src={time} />
        <span>Live Clock</span>
      </div>
      <div className='cards'>
        <img className='img' src={texttovoice}/>
        <span>Text to Voice</span>
      </div>
      <div className='cards'>
        <img className='img' src={texttype} />
        <span>Typing Effect</span>
      </div>
      <div className='cards'>
        <img className='img' src={stopwatch} />
        <span>StopWatch</span>
      </div>
      <div className='cards'>
        <img className='img' src={selectmenu} />
        <span>Select Menu</span>
      </div>
      <div className='cards'>
        <img className='img' src={searchimg}/>
        <span>Images Searcher</span>
      </div>
      <div className='cards'>
        <img className='img' src={randompass} />
        <span>Pass Generator</span>
      </div>
      <div className='cards'>
        <img className='img' src={selectmenu} />
        <span>Select Menu</span>
      </div>
      <div className='cards'>
        <img className='img' src={searchimg}/>
        <span>Images Searcher</span>
      </div>
      <div className='cards'>
        <img className='img' src={randompass} />
        <span>Pass Generator</span>
      </div>
    </div>
)}
    <button  onClick={toggleProjects}>{showMore ? 'See Less' : 'See More'}</button>
  </div>
  )
}

export default Projects