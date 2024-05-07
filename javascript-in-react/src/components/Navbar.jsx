import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
       <h1><span>JavaScript</span> Projects</h1>
       <ul>
        <Link className='li' to='Home' duration={150} smooth={true}><li>Home</li></Link>
        <Link className='li' to='Projects' duration={150} smooth={true}><li>Projects</li></Link>
        <Link className='li' to='Contact' duration={150} smooth={true}><li>Contact</li></Link>
       </ul>
    </div>
  )
}

export default Navbar