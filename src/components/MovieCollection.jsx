import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieCollection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((movieList) => setMovies(movieList));
  }, []);

  return (
    <div className="movie-collection">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollection;
