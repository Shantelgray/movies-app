import React from "react";
import MovieCard from "./MovieCard";

const MovieCollection = ({ movies }) => {
  return (
    <div className="movie-collection">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
