import React, { useState } from 'react';
import Movie from './Movie'; 

const Catalog = ({ users, movies, setMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rentedMovies, setRentedMovies] = useState([]);
  const [budget, setBudget] = useState(10);

  const rentMovie = (movie) => {
    if (budget < 3) {
        alert('Insufficient funds. Cannot rent the movie.');
    } else
    if (!movie.isRented) {
      setRentedMovies([...rentedMovies, movie]);
      setMovies((prevMovies) =>
        prevMovies.map((m) => (m.id === movie.id ? { ...m, isRented: true } : m))
      );
      setBudget(budget - 3);
    }
  };

  const unRentMovie = (movie) => {
    setRentedMovies(rentedMovies.filter((m) => m.id !== movie.id));
    setMovies((prevMovies) =>
      prevMovies.map((m) => (m.id === movie.id ? { ...m, isRented: false } : m))
    );
    setBudget(budget + 3);
  };


  const filterMovies = () => {
    if (!searchQuery) {
      return movies;
    }
  
    const lowercasedQuery = searchQuery.toLowerCase();
  
    return movies.filter((movie) => {
      const lowercasedTitle = movie.title.toLowerCase();
      return lowercasedTitle.includes(lowercasedQuery);
    });
  };
  

  const filteredMovies = filterMovies();

  return (
    <div className='catalog'>
      <h3 className='budget'>Budget: {budget}$</h3>

      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {rentedMovies.length > 0 && (
        <div className='rented-section'>
          <h2 className='header-title'>Rented Movies</h2>
          {rentedMovies.map((rentedMovie) => (
            <Movie
              key={rentedMovie.id}
              movie={rentedMovie}
              onUnRent={unRentMovie}
              isRented={true}
            />
          ))}
        </div>
      )}
      <h1 className='header-title'>Catalog</h1>
      {filteredMovies
        .map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onRent={rentMovie}
            onUnRent={unRentMovie}
            isRented={rentedMovies.some((rentedMovie) => rentedMovie.id === movie.id)}
          />
        ))}
    </div>
  );
};

export default Catalog;
