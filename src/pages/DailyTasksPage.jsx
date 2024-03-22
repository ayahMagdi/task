import React from 'react'
import CurrentlyTask from '../components/CurrentlyTask'
import FinishedLayout from '../components/FinishedLayout'
import uncheck from '../assets/Ellipse 13.png'
import progress from '../assets/Group 100000231011.png'

const DailyTasksPage = () => {
  return (
    <div className='bg-[rgba(243,245,249,1)] w-[70%] py-32 relative'>
        <h3 className='font-semibold text-xl text-[rgba(39,16,78,1)] mb-7 text-right mx-8'>مهام اليوم:</h3>
        <CurrentlyTask />
        <div className='mx-6 my-6'>
           <FinishedLayout title='تصميم الصفحة الرئيسية.' img={uncheck} />
        </div>
        <CurrentlyTask img={progress} />
    </div>
  )
}

export default DailyTasksPage