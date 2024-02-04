// MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2 className='movie-title'>{movie.title} ({movie.year})</h2>
      <div className='movie-descr-img'>
        <img src={movie.img} alt={movie.title} />
      </div>
      <p className='movieDescr'>{movie.descrShort}</p>
    </div>
  );
};

export default MovieDetail;
