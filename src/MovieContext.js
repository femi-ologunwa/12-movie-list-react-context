import React, { useState, createContext } from 'react';

//initiate/create a context
export const MovieContext = createContext();

//creating a component - This will wrap around the App component and make all components within the App component to have access to the data & functions here.
export const MovieProvider = (props) => {
   const [movies, setMovies] = useState([
      {
         name: 'Harry Potter',
         price: '$10',
         id: 23124,
      },
      {
         name: 'Inception',
         price: '$15',
         id: 23125,
      },
      {
         name: 'Immortal Beloved',
         price: '$20',
         id: 23126,
      },
   ]);
   return (
      <MovieContext.Provider value={'Hello'}>
         {props.children}
      </MovieContext.Provider>
   );
};

//props.children will render all the child components - Nav and MovieList
