import React, { useState } from "react";
import { Movie } from "./App";

interface MovieCardProps {
  movie: Movie;
}
function MovieCard({ movie }: MovieCardProps) {
  const [isToggled, setIsToggled] = useState(false);
  function isMovieValid(movie: Movie) {
    return movie !== undefined && movie !== null;
  }
  if (!isMovieValid(movie)) return null;

  const { title, genre, year, description, rating, image } = movie;
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="movie-details" onClick={handleToggle}>
      {isToggled ? (
        <div>
          <h3>{title}</h3>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Rating:</strong> {rating}/10
          </p>
        </div>
      ) : (
        <div>
          <img src={image} alt={title} width="200" height="300" />
        </div>
      )}
    </div>
  );
}
export default MovieCard;
