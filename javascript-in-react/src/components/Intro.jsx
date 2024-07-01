import React from 'react'

const Intro = () => {
  return (
    <div className='w-full h-full grid grid-cols-2 gap-8 '>
      <div className='w-full h-screen pl-10 flex flex-col items-start justify-center'>
        <div className='flex items-end justify-center text-[200px] font-bold'>
        <p className='font-black text-[200px] bg-black text-[#f0db4f]'>30</p>
        <p>Days</p>
        </div>
        <p className='text-6xl w-full text-end px-4'>JavaScript Projects</p>
      </div>
      <div>
        <p>
          JavaScript
        </p>
      </div>
    </div>
  )
}

export default Intro