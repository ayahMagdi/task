import card1 from '../assets/card (1).png'
import card2 from '../assets/card (2).png'
import card3 from '../assets/card (3).png'

const Cards = () => {
  return (
    <div className='mt-10 mx-6 grid grid-cols-3 gap-5'>
        <div>
            <img src={card1} alt='card1' className='w-full' />
        </div>
        <div>
           <img src={card2} alt='card1' className='w-full' />
        </div>
        <div>
           <img src={card3} alt='card1' className='w-full' />
        </div>
    </div>
  )
}

export default Cards