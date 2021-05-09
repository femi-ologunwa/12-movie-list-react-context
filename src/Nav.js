import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
   //accessing the value in the provider through the context
   const value = useContext(MovieContext);

   return (
      <div className='nav'>
         <h3>{value}</h3>
         <h4>List of Movies: 4</h4>
      </div>
   );
}

export default Nav;

//the value constant will render 'Hello'
