import React from 'react'
import cancel from '../assets/cancel 1.png'

const Notification = () => {
  return (
    <div className='py-2 absolute top-0 left-0 w-full bg-[rgba(172,209,245,0.21)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] flex px-4 justify-start'>
        <div className='center text-xl font-semibold flex-1'>غدا اجازة بمناسبة عيد الفطر المبارك كل عام وانتم بخير</div>
        <div className='cursor-pointer'>
            <img src={cancel} alt='cancel' />
        </div>
    </div>
  )
}

export default Notification