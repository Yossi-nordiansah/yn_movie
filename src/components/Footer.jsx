import React from 'react';

const Footer = ({visible}) => {

  return (
    <div className={`text-center p-3 bg-slate-500 dark:bg-blue-950 text-white ${visible ? 'brightness-50 backdrop-brightness-90' : 'brightness-100'}`}>
        <p className='mb-3'>Data dari Aplikasi ini berasal dari <a href="http://www.omdbapi.com/#usage" className='text-blue-300 font-semibold'>http://www.omdbapi.com/#usage</a></p>
        <small>Develop By Yossi Nordiansah</small>
    </div>
  )
}

export default Footer