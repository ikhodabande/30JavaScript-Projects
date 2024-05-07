import React from 'react'
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

const Projects = () => {
  return (
    <div className='container'>
       <div className='Projects'>
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
    </div>
    </div>
  )
}

export default Projects