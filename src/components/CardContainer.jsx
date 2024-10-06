import React from 'react';
import { useSelector } from 'react-redux';
import Card from "./Card";
import loading from "../assets/loading2.gif"

const CardContainer = () => {

  const dataFilm = useSelector(state => state.dataFilm.dataFilm.data);
  const errorMessage = useSelector(state => state.dataFilm.errorMessage);
  const isLoading = useSelector(state => state.dataFilm.isLoading)

  return (
    <div className='min-h-[58vh]'>
      {isLoading ? <img src={loading} className='mx-auto mt-10 w-20'/> :  (dataFilm && dataFilm.length > 0 ? (
        <div className='flex md:justify-between justify-center mx-auto w-5/6 gap-3 mt-10 flex-wrap'>
          {dataFilm.map((film) => (
            <Card key={film.imdbID} id={film.imdbID} title={film.Title} year={film.Year} image={film.Poster} />
          ))}
        </div>
      ) : (
        errorMessage === null ? (
          <p className='text-center mt-10 text-xl dark:text-white font-semibold'>Cari Film dalam Kolom Search</p>
        ) : (
          <p className='text-center mt-10 text-xl dark:text-white font-semibol'>Film Tidak Ditemukan</p>
        )
      ))}
    </div>
  );
};

export default CardContainer;

