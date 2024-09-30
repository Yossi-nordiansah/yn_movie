import React, { useState } from 'react';
import searchIcon from '../assets/search-svgrepo-com.svg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setDataFilm } from '../store/slice/dataFilmSlice';
import { getDataFilm } from '../store/slice/dataFilmSlice';

const SearchInput = () => {

  // const token = '966fb1b7';
  // const [data, setData] = useState(null);
  const [inputQuery, setInputQuery] = useState(null);
  const dispatch = useDispatch();

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(getDataFilm());
  //   try {
  //     const response = await axios.get(`http://www.omdbapi.com/?apikey=${token}&s=${inputQuery}`);
  //     console.log(response.data.Search);
  //     setData(response);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // } 

  return (
    <>
        <form action="" className='flex justify-between rounded-full mx-auto border-2 w-1/4 mt-8 pl-2 overflow-hidden' onSubmit={()=>dispatch(getDataFilm())}>
            <input type="text" onChange={(e)=>setInputQuery(e.target.value)} className='border-none outline-none px-2 w-full bg-transparent py-2 pl-2' placeholder='Search Movie...'/>
            <button className='bg-slate-300 w-12' type='submit'>
              <img src={searchIcon} alt="" className='w-6 mx-auto'/>
            </button>
        </form>
    </>
  )
}

export default SearchInput