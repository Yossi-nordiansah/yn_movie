import React from 'react';
import searchIcon from '../assets/search-svgrepo-com.svg';

const SearchInput = () => {
  return (
    <>
        <form action="" className='flex justify-between rounded-full mx-auto border-2 w-1/4 mt-8 pl-2 overflow-hidden'>
            <input type="text" className='border-none outline-none px-2 w-full bg-transparent py-2 pl-2' placeholder='Search Movie...'/>
            <button className='bg-slate-300 w-12' type='submit'>
              <img src={searchIcon} alt="" className='w-6 mx-auto'/>
            </button>
        </form>
    </>
  )
}

export default SearchInput