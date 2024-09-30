import React, { useState } from 'react';
import Card from './Card';
import tes from '../assets/avengers.jpg'

const CardContainer = () => {

  const [data, setData] = useState({
    id : 1,
    title : 'tes title',
    year : '2003',
    image : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  })
  
  return (
    <div className='flex justify-between mx-auto w-11/12 gap-3 mt-10 border'>
      <Card title={data.title} year={data.year} image={data.image}/>
    </div>
  )
}

export default CardContainer