import React from 'react'
import UserImg from '../assets/user.png'
import notification from '../assets/notification.png'

const User = () => {
  return (
   <div className='pt-8'>
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center gap-4'>

                <div className='rounded-full'>
                    <img src={UserImg} alt='admin' className='rounded-full w-[51px] h-[51px] object-cover' />
                </div>
                
                <div>
                    <h2 className='font-bold text-[#27104E]'>م/أيه</h2>
                    <h3 className='text-sm text-[#27104E]'>UI/UX Designer</h3>
                </div>

            </div>
            <div>
                <img src={notification} alt='notification' className='w-[25px] object-contain' />
            </div>
           
        </div>
        <div className='bg-[rgba(217,217,217,.5)] h-[2px] w-full mt-5'></div>
   </div>
  )
}

export default User