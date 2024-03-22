import React from 'react'

const Skills = () => {
  return (
    <div className='mx-6'>
       <h3 className='font-semibold text-xl text-[rgba(39,16,78,1)] mb-4 text-right'>مهاراتك:</h3>
       <div className='grid grid-cols-4 gap-5 '>
           <div className='rounded-3xl p-4 bg-[rgba(172,209,245,0.21)] text-center'>UI Designer</div>
           <div className='rounded-3xl p-4 text-center bg-[rgba(152,84,203,0.1)]'>UX Designer</div>
           <div className='rounded-3xl p-4 text-center bg-[rgba(220,236,219,1)]'>Wireframe</div>
           <div className='rounded-3xl p-4 text-center bg-[rgba(247,231,221,1)]'>Prototype</div>
       </div>
    </div>
  )
}

export default Skills