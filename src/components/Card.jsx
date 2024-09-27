import React from 'react';
import tes from '../assets/avengers.jpg'

const Card = () => {
  return (
    <div className='bg-blue-300 w-1/6 flex gap-3 rounded-xl overflow-hidden'>
        <img src={tes} alt="" className='mx-auto'/>
        <div>
            <p>title</p>
            <p>year</p>
        </div>
        
    </div>
  )
}

export default Card