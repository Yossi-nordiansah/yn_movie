import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({title, image, year}) => {

  const counter = useSelector(state=>state.counterSlice.counter);

  return (
    <div className='bg-blue-300 w-1/5 rounded-xl overflow-hidden'>
        <img src={image} alt="" className='mx-auto'/>
        <div className='text-center p-2'>
            <p>{title}</p>
            <p>{year}</p>
            <p>{counter}</p>
        </div>

    </div>
  )
}

export default Card