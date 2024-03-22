import React from 'react'
import AltStatistic from './AltStatistic'
import icon1 from '../assets/to-do-list (1) 1.png'
import icon2 from '../assets/clipboard 1.png'
import icon3 from '../assets/layers 1.png'
import icon4 from '../assets/testing 1.png'

const AltStatistics = () => {
  return (
    <div className='grid grid-cols-4 gap-5 mx-6 mb-14'>
        <AltStatistic 
            icon={icon1}
            color='bg-[rgba(221,172,245,0.27)]'
            bgColor='bg-[rgba(221,172,245,0.4)]'
            title='المهام اليومية'
            altTitle='100'
        />
        <AltStatistic 
            icon={icon2}
            color='bg-[rgba(172,209,245,0.16)]'
            bgColor='bg-[rgba(172,209,245,0.34)]'
            title='عدد المشاريع'
            altTitle='2000'
        />
        <AltStatistic 
            icon={icon3}
            color='bg-[rgba(253,211,180,0.41)]'
            bgColor='bg-[rgba(253,211,180,0.51)]'
            title='المهام المتبقية'
            altTitle='50'
        />
        <AltStatistic 
            icon={icon4}
            color='bg-[rgba(141,205,117,0.23)]'
            bgColor='bg-[rgba(115,194,85,0.2)]'
            title='المهام المنتهية'
            altTitle='50'
        />
   </div>
  )
}

export default AltStatistics