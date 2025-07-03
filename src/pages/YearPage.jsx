import React from "react";
import MovieCard from "../components/MovieCard";

const YearPage = ({ movies }) => {
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <div className="rating-page">
      <h2>Movies Sorted by Year (Oldest to Newest)</h2>
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

export default YearPage;
