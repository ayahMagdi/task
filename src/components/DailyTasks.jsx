import React from 'react'
import tasks from '../assets/Time management-amico 1.png'
import {Link} from 'react-router-dom'

const DailyTasks = () => {
  return (
    <div className='bg-white rounded-lg mx-6 h-[214px]'>
       <div className='flex justify-between h-full px-8'>
            <div className='text-right flex flex-col justify-center items-start gap-3'>
                <h2 className='text-[rgba(39,16,78,1)] text-4xl font-semibold'>المهام اليومية</h2>
                <h3 className='text-[rgba(39,16,78,1)] text-lg font-light'>افحص مهامك اليومية وقم بها</h3>
                <Link to={'/dailytasks'} className='text-[rgba(252,251,255,1)] bg-[rgba(33,105,177,1)] rounded-2xl w-[180px] cursor-pointer h-[40px] flex justify-center items-center'>مهام اليوم</Link>
            </div>
            <div>
                <img src={tasks} alt='tasks' className='relative -top-[83px]' />
            </div>
       </div>
    </div>
  )
}

export default DailyTasks