import React from 'react';
import logo from '../assets/logoYNpng.png'

const Navbar = () => {
  return (
    <div className='py-3 flex gap-2 items-center px-5 bg-slate-600'>
        <img src={logo} alt="" className='w-7 h-7'/>
        <p className='text-white font-bold text-2xl'>YN Movie</p>
    </div>
  )
}

export default Navbar