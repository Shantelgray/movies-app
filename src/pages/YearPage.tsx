import React from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../components/App";

interface YearPageProps {
  movies: Movie[];
}
const YearPage = ({ movies }: YearPageProps) => {
  const sortedMovies = [...movies].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return (
    <div className="rating-page">
      <h2>Movies Sorted by Year (Newest to Oldest)</h2>
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
