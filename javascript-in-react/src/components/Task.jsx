import React from 'react'
import '../index.css';

const Task = ({TaskName}) => {
  return (
    <div className='cards' >
        <img className='img' src={TaskName} alt="" />
        <span>{TaskName.id}</span>
      </div>
  )
}

export default Task