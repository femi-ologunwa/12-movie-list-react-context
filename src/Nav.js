import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
   //accessing the value in the provider through the context
   const [movies, setMovies] = useContext(MovieContext);

   return (
      <div className='nav'>
         <h3>Logo</h3>
         <h4>List of Movies: {movies.length}</h4>
      </div>
   );
}

export default Nav;
