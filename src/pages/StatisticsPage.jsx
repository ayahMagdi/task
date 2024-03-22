import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import AltStatistics from '../components/AltStatistics'
import Skills from '../components/Skills'

const StatisticsPage = () => {
  return (
    <div className='bg-[rgba(243,245,249,1)] w-[70%] py-32 relative'>
        <PersonalInfo />
        <AltStatistics />
        <Skills />
    </div>
  )
}

export default StatisticsPage