import React from 'react'

const Input = ({title ,type ,name , placeholder}) => {
  return (
    <div className='mb-10'>
        <label className='text-[rgba(39,16,78,1)] text-md font-semibold text-right block mb-3'>{title}</label>
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            className='bg-white rounded-2xl h-12 w-full rtl px-5'
        />
    </div>
  )
}

export default Input