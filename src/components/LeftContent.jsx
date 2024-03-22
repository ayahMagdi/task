import React from 'react'
import About from './About'
import MyCalendar from './MyCalendar'

const LeftContent = () => {
  return (
    <div className='w-[22%] px-8'>
        <About />
        <MyCalendar />
    </div>
  )
}

export default LeftContent