import React from 'react'
import Statistic from './Statistic'
import icon from '../assets/Icon.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'
import icon5 from '../assets/Icon5.png'
import icon6 from '../assets/Icon6.png'

const Statistics = () => {

    const data = [
        {title: 'اجمالي الراتب' ,altTile: '$5000' ,img: icon , alt: 'icon'},
        {title: 'عدد مشاريع قمت بالعمل عليها',altTile: '2000',img: icon2 , alt: 'icon2'},
        {title: 'عدد المهام منذ بدء العمل',altTile: '1000' ,img: icon3 , alt: 'icon3'},
        {title: 'عدد مهام اليوم',altTile: '200',img: icon4 , alt: 'icon4'},
        {title: 'عدد أيام الغياب',altTile: '7',img: icon5 , alt: 'icon5'},
        {title: 'انضمامك إلى فريقنا',altTile: 'منذ 3 أشهر',img: icon6 , alt: 'icon6'}
    ]

  return (
    <div className='mt-10 mx-6 grid grid-cols-3 gap-5'>
        {data?.map((e , i) => <Statistic title={e.title} altTitle={e.altTile} img={e.img} alt={e.alt} key={i} />)}
    </div>
  )
}

export default Statistics