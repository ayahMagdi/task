import user from '../assets/Group 21 3 (1).png'
import camera from '../assets/camera 1.png'

const PersonalInfo = () => {
  return (
    <div className='flex justify-center flex-col items-center mb-14'>
        <div className='p-2 rounded-full border border-[rgba(33,105,177,1)] w-[125px] relative mb-4'>
            <div><img src={user} alt='user' /></div>
            <div className='absolute bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center top-[95px] left-0 cursor-pointer'><img src={camera} alt='camera' /></div>
        </div>
        <h2 className='font-semibold text-[rgba(39,16,78,1)] text-2xl mb-1'>م/ أية مجدي</h2>
        <h3 className='text-md text-[rgba(128,128,128,1)]'>UI/UX Designer</h3>
    </div>
  )
}

export default PersonalInfo