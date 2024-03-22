import React from 'react'
import FinishedLayout from './FinishedLayout'
import check from '../assets/checklist 1.png'
import uncheck from '../assets/Ellipse 13.png'

const FinishedTasks = () => {
  return (
    <div className='mx-6 mt-10 text-right'>
      <div className='mb-14'>
            <h3 className='text-[rgba(39,16,78,1)] font-semibold text-lg mb-5'>:المهام المنتهيه</h3>
            <div>
                <FinishedLayout title='تصميم الصفحة الرئيسية.' img={check} finished />
                <FinishedLayout title='تصميم الصفحة الرئيسية.' img={check} finished />
                <FinishedLayout title='تصميم السلة.' img={check} finished />
                <FinishedLayout title='تصميم الدفع.' img={check} finished />
            </div>
      </div>
      <div>
        <h3 className='text-[rgba(39,16,78,1)] font-semibold text-lg mb-5'>:المهام المتبقية</h3>
        <div>
            <FinishedLayout title='تصميم الصفحة الرئيسية.' img={uncheck} />
        </div>
      </div>
    </div>
  )
}

export default FinishedTasks