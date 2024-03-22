import logo from '../assets/Vertical Colorful Logo JPG-0١ 1.png'
import link1 from '../assets/Group 1000002309.png'
import link2 from '../assets/Group 1000002310.png'
import link3 from '../assets/Group 1000002311.png'
import link4 from '../assets/Group 1000002312.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[8%]'>
        <div className='mb-5 text-center'>
             <img src={logo} alt='logo' />
        </div>
        <div className='flex flex-col justify-center gap-6 items-center'>
            <Link className='cursor-pointer' to={'/'}>
                <img src={link1} alt='link1' />
            </Link>
            <Link className='cursor-pointer' to={'/tasks'}>
                <img src={link2} alt='link2' />
            </Link>
            <Link className='cursor-pointer' to={'/statistics'}>
                <img src={link3} alt='link3' />
            </Link>
            <Link className='cursor-pointer' to={'/login'}>
               <img src={link4} alt='link4' />
            </Link>
        </div>
    </div>
  )
}

export default Sidebar