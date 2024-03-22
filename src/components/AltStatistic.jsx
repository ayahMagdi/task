

const AltStatistic = ({title , altTitle , color , icon , bgColor}) => {
  return (
    <div className={`${color} rounded-3xl text-center flex justify-center items-center flex-col p-2 py-6`}>

        <div className={`${bgColor} rounded-full w-[90px] h-[90px] flex justify-center items-center mb-4`}>
            <img src={icon} alt={icon} />
        </div>

        <h3 className='text-[rgba(39,16,78,1)] text-xl font-semibold mb-1'>{title}</h3>
        <h4 className='text-[rgba(77,77,77,1)] text-2xl font-medium'>{altTitle}</h4>
    
   </div>
  
  )
}

export default AltStatistic