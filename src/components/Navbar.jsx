import React from 'react';
import logo from '../assets/logoYNpng.png';
import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <div className='py-3 flex justify-between dark:bg-blue-950 items-center px-5 bg-slate-500'>
      <div className='flex gap-2'>
        <img src={logo} alt="" className='w-7 h-7'/>
        <p className='text-white font-bold text-2xl'>YN Movie</p>
      </div>
      <DarkMode/>
    </div>
  )
}

export default Navbar