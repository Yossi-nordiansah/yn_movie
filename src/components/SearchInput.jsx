import React, { useState } from 'react';
import searchIcon from '../assets/search-svgrepo-com.svg';
import { useDispatch } from 'react-redux';
import { getDataFilm } from '../store/slice/dataFilmSlice';

const SearchInput = () => {

  const [inputQuery, setInputQuery] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataFilm(inputQuery));
  } 

  return (
    <div className='px-8'>
        <form action="" className='flex justify-between rounded-full mx-auto border-2 max-w-96 mt-8 pl-2 overflow-hidden' onSubmit={handleOnSubmit}>
            <input type="text" onChange={(e)=>setInputQuery(e.target.value)} className='border-none outline-none px-2 w-full bg-transparent py-2 pl-2' placeholder='Search Movie...'/>
            <button className='bg-slate-300 w-12' type='submit'>
              <img src={searchIcon} alt="" className='w-6 mx-auto'/>
            </button>
        </form>
    </div>
  )
}

export default SearchInput