import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] px-2 flex items-center justify-between bg-[#f0db4f] text-[#323330]'>
      <p className='font-extrabold text-2xl'>JavaScript</p>
      <ul className='flex items-center '>
        <li className='px-2 font-semibold'>Home</li>
        <li className='px-2 font-semibold'>Contact</li>
        <li className='px-2 font-semibold'>Projects</li>
      </ul>
    </div>
  )
}

export default Navbar