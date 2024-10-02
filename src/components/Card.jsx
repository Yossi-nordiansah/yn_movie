import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({title, image, year}) => {

  return (
    <div className='bg-blue-300 w-[300px] rounded-xl mb-10 overflow-hidden'>
        <img src={image} alt="" className='mx-auto w-full h-96'/>
        <div className='text-center p-2'>
            <p>{title}</p>
            <p>{year}</p>
            {/* <button onClick={()=> dispatch(addByAmount(10))}>detail</button> */}
        </div>

    </div>
  )
}

export default Card