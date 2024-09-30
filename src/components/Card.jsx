import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({title, image, year}) => {

  const dispatch = useDispatch();

  return (
    <div className='bg-blue-300 w-1/5 rounded-xl overflow-hidden'>
        <img src={image} alt="" className='mx-auto'/>
        <div className='text-center p-2'>
            <p>{title}</p>
            <p>{year}</p>
            {/* <button onClick={()=> dispatch(addByAmount(10))}>detail</button> */}
        </div>

    </div>
  )
}

export default Card