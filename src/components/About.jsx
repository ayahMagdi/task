import React from 'react'
import User from './User'
import img from '../assets/Design community-pana 1.png'

const About = () => {
  return (
    <div className='bg-[rgba(172,209,245,.21)] rounded-lg p-4'>
        <User />
        <div className='flex justify-center'>
            <img src={img} alt='content' className=' object-contain' />
        </div>
        <h3 className='text-[#27104E] font-semibold text-lg mb-1 text-right'>نحن في شركة تك بارت <span className='block'>ندعمك ونتمني لك يوم سعيد</span></h3>
        <p className='text-[#27104E] font-light text-sm text-right'>افحص قائمة المهام لديك، اسحب لتحديد نسبة النجاح ثم اضغط انتهاء فور انتهائك من المهمة.</p>
    </div>
  )
}

export default About