import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./App";

interface MovieCollectionProps {
  movies: Movie[];
}
const MovieCollection = ({ movies }: MovieCollectionProps) => {
  if (!movies || movies.length === 0) {
    return <p style={{ color: "white" }}></p>;
  }

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
