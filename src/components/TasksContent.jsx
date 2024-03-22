import React from 'react'
import CurrentlyTask from './CurrentlyTask'
import FinishedTasks from './FinishedTasks'

const TasksContent = () => {
  return (
    <div className='bg-[rgba(243,245,249,1)] w-[70%] py-32 relative'>
        <CurrentlyTask />
        <FinishedTasks />
    </div>
  )
}

export default TasksContent