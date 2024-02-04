import React from 'react'
import Movie from './Movie'

export const NavbarCatalog = ({movies}) => {
    const isInNavbar = true
  return (
    <div>
        {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          isInNavbar={isInNavbar}
        />
      ))}</div>
  )
}
