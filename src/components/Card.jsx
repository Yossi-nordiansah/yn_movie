import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../store/slice/modalSlice';

const Card = ({title, image, year}) => {

  const dispatch = useDispatch();

  return (
    <div className='shadow-sm bg-gray-200 w-[300px] rounded-md mb-10 overflow-hidden'>
        <img src={image} alt="" className='mx-auto w-full h-96'/>
        <div className='text-center py-3 px-3'>
            <p className='font-bold text-ellipsis whitespace-nowrap overflow-hidden'>{title}</p>
            <p>{year}</p>
            <p className='text-blue-500 font-semibold cursor-pointer' onClick={()=>dispatch(showModal(title))}>Lihat Detail</p>
        </div>
    </div>
  )
}

export default Card