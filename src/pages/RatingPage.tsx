import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../components/App";

interface RatingPageProps {
  movies: Movie[];
}
const RatingPage = ({ movies }: RatingPageProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const sortedMovies = [...movies].sort(
    (a, b) => Number(a.rating) - Number(b.rating)
  );
  const flippedSorted = [...movies].sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );
  const sortedList = isFlipped ? flippedSorted : sortedMovies;

  function handleChange() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="rating-page">
      <h2>Movies Sorted by Rating (High to Low)</h2>
      {sortedMovies.length > 0 && (
        <div className="movie-container">
          {sortedList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <button onClick={handleChange}> Flip Sort</button>
    </div>
  );
};

export default RatingPage;

//
//
