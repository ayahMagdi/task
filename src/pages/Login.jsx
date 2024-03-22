import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import Form from '../components/Form'

const Login = () => {
  return (
    <div className='bg-[rgba(243,245,249,1)] w-[70%] py-32 relative'>
        <PersonalInfo />
        <Form />
    </div>
  )
}

export default Login