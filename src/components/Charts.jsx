import React from 'react'
import chart1 from '../assets/Large_Double Chart2.png'
import chart2 from '../assets/Medium_Pie Chart.png'

const Charts = () => {
  return (
    <div className='flex justify-between mt-10 mx-6 gap-5 h-[255px]'>
        <div className='w-2/5'>
          <img src={chart2} alt='chart2' className='w-full h-full' />
        </div>
        <div className='w-3/5'>
            <img src={chart1} alt='chart1' className='w-full h-full' />
        </div>
    </div>
  )
}

export default Charts