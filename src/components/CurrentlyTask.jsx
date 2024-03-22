import arrow from '../assets/down-arrow (1) 1.png'
import progress from '../assets/Group 1000002307.png'

const CurrentlyTask = ({img}) => {
  return (
    <div className='rounded-3xl px-10 py-4 mx-6 bg-white text-right relative'>
        <div className='absolute left-5 top-5'>
            <img src={arrow} alt='arrow' />
        </div>
        <div className='mr-14'>
           <span className='text-[rgba(217,217,217,1)] font-bold mb-1'>22 نوفمبر</span>
           <h3 className='text-[rgba(39,16,78,1)] font-semibold text-xl mb-1'>موقع تجاري</h3>
           <h4 className='text-[rgba(39,16,78,1)] font-light mb-2'>تصميم</h4>
           <div className='w-[85%] ml-auto'>
               <div className='mb-2'><img src={ `${img ? img : progress }` } alt='progress' /></div>
               <div className='flex justify-between'>
                   <span className='text-[rgba(39,16,78,1)] text-sm font-normal'>90%</span>
                   <span className='text-[rgba(39,16,78,1)] text-sm font-normal'>النجاح</span>
               </div>
           </div>
        </div>
    </div>
  )
}

export default CurrentlyTask