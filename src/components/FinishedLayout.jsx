

const FinishedLayout = ({title , img ,finished}) => {
  return (
    <div className='bg-white rounded-3xl w-full py-4 px-6 mb-4 flex justify-start items-center gap-2'>
       <img src={img} alt='check' />
       <h4 className={`${finished && 'line-through'} text-[rgba(39,16,78,1)] font-light`}>{title}</h4>
    </div>
  )
}

export default FinishedLayout