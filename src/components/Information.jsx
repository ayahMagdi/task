import card1 from '../assets/Medium_Tasks.png'
import card2 from '../assets/Medium_Traffic.png'

const Information = () => {
  return (
    <div className='mt-10 mx-6 flex justify-start gap-5'>
       <div>
           <img src={card2} alt='card1' />
        </div>
        <div>
            <img src={card1} alt='card1' />
        </div>
    </div>
  )
}

export default Information