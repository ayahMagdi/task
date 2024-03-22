import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendar from '../assets/Calendar.png'

const MyCalendar = () => {
  return (
    <div>
        <h2 className='text-[#27104E] font-semibold text-xl mt-10 mb-5 text-right'>أكتوبر 2024</h2>
        <Calendar locale="ar" />
        {/* <div>
           <img src={calendar} alt='canlendar' className='w-full'/>
        </div> */}
    </div>
  )
}

export default MyCalendar