import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie, onRent, onUnRent, isRented, isInNavbar}) => (
    isInNavbar ? 
    <div className="movie-template" key={movie.id}>
        <img className="movie-img" src={movie.img} alt={movie.title} />
        <Link to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
        </Link>
    </div>
    :
    <div className="movie-template" key={movie.id}>
        <img className="movie-img" src={movie.img} alt={movie.title} />
        <br />
        <div className='btn-container'>
        {isRented ? (
            <button className='un-rent-btn' onClick={() => onUnRent(movie)}>
            -
            </button>
        ) : (
            <button className='rent-btn' onClick={() => onRent(movie)}>
            +
            </button>
        )}
        </div>
        <Link to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
        </Link>
        <p>Renting Price is: 3</p>
    </div>
);

export default Movie;
