import Cards from './Cards'
import Charts from './Charts'
import DailyTasks from './DailyTasks'
import Information from './Information'
import Notification from './Notification'
import Statistics from './Statistics'

const MainContent = () => {
  return (
    <div className='bg-[rgba(243,245,249,1)] w-full py-32 relative'>
        <Notification />
        <DailyTasks />
        <Statistics />
        <Charts />
        <Cards />
        <Information />
    </div>
  )
}

export default MainContent