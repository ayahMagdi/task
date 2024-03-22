import React from 'react'
import Input from './Input'

const Form = () => {
  return (
    <div className='mx-6'>
        <Input 
           title='البريد الالكتروني :'
           name='email'
           type='email'
           placeholder='Reemmostafa@icloud.com'
        />
        <Input 
           title='كلمة المرور :'
           name='password'
           type='password'
           placeholder='*************'
        />
        <Input 
           title='اللغة :'
           name='lang'
           type='text'
           placeholder='العربية'
        />
    </div>
  )
}

export default Form