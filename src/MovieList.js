import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

function MovieList() {
   //accessing the value in the provider through the context
   const value = useContext(MovieContext);

   return (
      <div className='movieList'>
         <h3>{value}</h3>
         <Movie />
      </div>
   );
}

export default MovieList;

//the value constant will render 'Hello'
