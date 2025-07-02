import React from "react";
import MovieCard from "./MovieCard";

const MovieCollection = ({ movies }) => {
  return (
    <div className="movie-collection">
      {movies.map((movie, index) => (
        <MovieCard key={movie.index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
