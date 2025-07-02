import React from "react";
import MovieCard from "./MovieCard";

const MovieCollection = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p style={{ color: "white" }}>No movies to display.</p>;
  }

  return (
    <div className="movie-collection">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
