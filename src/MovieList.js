import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

function MovieList() {
   //accessing the value in the provider through the context
   const [movies, setMovies] = useContext(MovieContext);

   return (
      <div className='movieList'>
         {movies.map((movie) => {
            console.log(movie);
            return (
               <Movie key={movie.id} name={movie.name} price={movie.price} />
            );
         })}
      </div>
   );
}

export default MovieList;
