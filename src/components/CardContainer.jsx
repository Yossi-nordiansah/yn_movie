import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from "./Card"

const CardContainer = () => {

  const dataFilm = useSelector(state=>(state.dataFilm.dataFilm.data));
  console.log(dataFilm);

  return (
    <div>
        {dataFilm? (
        <div className='flex justify-between mx-auto w-11/12 gap-3 mt-10 border flex-wrap'>
          {dataFilm.map((film, index) => (
            <Card key={film.imdbID} title={film.Title} year={film.Year} image={film.Poster}/>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
      
    </div>
  )
}

export default CardContainer