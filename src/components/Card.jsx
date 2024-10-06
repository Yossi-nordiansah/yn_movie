import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/slice/modalSlice';
import { getDetailDataFilm } from '../store/slice/modalSlice';

const Card = ({ title, image, year, id }) => {

  const dispatch = useDispatch();

  const handleLihatDetail = () => {
    dispatch(getDetailDataFilm(id));
    dispatch(showModal());
  }

  return (
    <div className='shadow-md dark:shadow-lg bg-gray-200 dark:drop-shadow-[0_0px_15px_#0066ff] dark:bg-gray-600 sm:min-w-[300px] min-w-[280px] max-w-[300px] rounded-md mb-10 overflow-hidden'>
      <img src={image} alt={title} className='mx-auto w-full h-96'/>
      <div className='text-center py-3 px-3'>
        <p className='font-bold text-ellipsis whitespace-nowrap overflow-hidden dark:text-white'>{title}</p>
        <p className='dark:text-white mb-2'>{year}</p>
        <p className='text-blue-600 dark:text-blue-400 font-semibold cursor-pointer' onClick={handleLihatDetail}>Lihat Detail</p>
      </div>
    </div>
  )
}

export default Card