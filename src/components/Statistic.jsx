
const Statistic = ({alt , img , title , altTitle}) => {
  return (
    <div className='bg-white rounded-2xl py-8 px-5 flex justify-start items-center gap-5'>
      <div className='w-[71px] h-[71px] bg-[rgba(244,247,254,1)] rounded-full'> 
         <img src={img} alt={alt} />
       </div>
       <div className='text-right'>
          <h3 className='text-sm text-[rgba(119,119,119,1)] mb-1'>{title}</h3>
          <h4 className='text-[rgba(5,205,153,1)] font-medium text-2xl'>{altTitle}</h4>
       </div>
    </div>
  )
}

export default Statistic