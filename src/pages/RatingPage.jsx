import React from "react";
import MovieCard from "../components/MovieCard";

const RatingPage = ({ movies }) => {
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="rating-page">
      <h2>Movies Sorted by Rating (High to Low)</h2>
      {sortedMovies.length > 0 && (
        <div className="movie-container">
          {sortedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingPage;
